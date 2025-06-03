import { HttpService } from '@nestjs/axios';
import { BadRequestException, Inject, Injectable, Logger } from '@nestjs/common';
import * as jsonwebtoken from 'jsonwebtoken';
import { JwksClient } from 'jwks-rsa';
import { lastValueFrom } from 'rxjs';

import { JWT_MAPPER, OIDC_AUTHORITY, ROLE_EVALUATORS } from '../consts';
import { OIDC_REALMS } from '../consts/OIDC_AUTHORITY';
import { RoleEvaluator } from '../interfaces';

// const length = (elem: Array<unknown>) =>
// elem && isArray(elem) ? elem.length : 0;
// const mapValue = (obj: Array<unknown>) =>
// obj && isArray(obj) ? obj.map((value) => ({ value })) : [];

type SecretOrKeyProviderCallback = (
  error: unknown,
  secret: false | string
) => void;
type SecretOrKeyProvider = (
  request: unknown,
  rawJwtToken: string,
  done: SecretOrKeyProviderCallback
) => void;

export type RoleBasedUser<T> = T & {
  roles: undefined | string[];
};

type OIDCRealmSettings = {
  [key: string]: {
    jwks_uri: string;
  };
};

type OIDCConfig = OIDCRealmSettings;

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);
  private _oidcConfig: OIDCConfig = {};

  // private jwksClient: Promise<JwksClient>;

  constructor(
    @Inject(OIDC_REALMS)
    protected readonly oidcRealms: string[],

    @Inject(ROLE_EVALUATORS)
    protected readonly evaluators: RoleEvaluator[],
    @Inject(OIDC_AUTHORITY)
    protected readonly oidcAuthority: string,
    @Inject(JWT_MAPPER)
    protected readonly jwtMapper: <T>(payload: unknown) => T,
    protected readonly httpService: HttpService
  ) {
    // this.jwksClient = (realm: string) => this.getJwksClient(realm);
  }

  async getJwksClient(realm: string): Promise<JwksClient> {
    const { jwks_uri } = (await this.oidcConfig())[realm];
    return new JwksClient({
      jwksUri: jwks_uri,
    });
  }

  async oidcConfig(): Promise<OIDCConfig> {
    for (const realm of this.oidcRealms) {
      if (this._oidcConfig[realm]) continue;
      try {
        const source$ = this.httpService.get(
          `${this.oidcAuthority + '/' + realm}/.well-known/openid-configuration`
        );
        const response = await lastValueFrom(source$);

        this._oidcConfig[realm] = response.data;
      } catch (err) {
        throw new BadRequestException(
          'There was an error when attempting to fetch openid-configuration url: ' +
          this.oidcAuthority,
          { cause: err }
        );
      }
    }
    return this._oidcConfig;
  }

  async getPublicKey(rawJwtToken: string): Promise<string> {
    const result = jsonwebtoken.decode(rawJwtToken, { complete: true });

    if (
      result &&
      typeof result !== 'string' &&
      result.header &&
      result.payload
    ) {
      const { header, payload } = result;
      const jwtPayload = payload as jsonwebtoken.JwtPayload;

      if (jwtPayload.iss == null) {
        throw new Error('No issuer found in the JWT.');
      }

      const kid = header.kid;
      const client = await this.getJwksClient(this.realmOf(jwtPayload.iss));
      const key = await client.getSigningKey(kid);
      return key.getPublicKey();
    }

    throw new Error('No header could be decoded from the JWT.');
  }

  realmOf(issuer: string): string {
    return (
      issuer.split('/').pop() || issuer.split('/').slice(-2).join('/') || issuer
    );
  }

  get keyProvider(): SecretOrKeyProvider {
    return (request, rawJwtToken, done) => {
      this.getPublicKey(rawJwtToken)
        .then((key: string) => {
          done(null, key);
        })
        .catch((error) => {
          done(error, false);
        });
    };
  }

  async validate<T>(payload: unknown): Promise<RoleBasedUser<T>> {
    const user: RoleBasedUser<T> = this.jwtMapper<RoleBasedUser<T>>(payload);

    return user;
  }
}
