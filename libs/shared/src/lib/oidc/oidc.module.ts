import { DynamicModule, Module } from '@nestjs/common';
import { JWT_MAPPER, OIDC_AUTHORITY, ROLE_EVALUATORS } from './consts';

import { AuthService } from './services';
import { HttpModule } from '@nestjs/axios';
import { JwtStrategy } from './strategies';
import { OIDC_REALMS } from './consts/OIDC_AUTHORITY';
import { PassportModule } from '@nestjs/passport';
import { RoleEvaluator } from './interfaces';

export interface OIDCModuleRegistrationOptions {
  OIDCAuthority: string;
  OIDCRealms?: string[];
  roleEvaluators?: RoleEvaluator[];

  jwtMapper?: (payload: unknown) => unknown;
}

@Module({})
export class OIDCModule {
  static forRoot(options: OIDCModuleRegistrationOptions): DynamicModule {
    return {
      module: OIDCModule,
      imports: [
        HttpModule,
        PassportModule.register({ defaultStrategy: 'jwt' }),
      ],
      providers: [
        AuthService,
        JwtStrategy,
        {
          provide: OIDC_AUTHORITY,
          useValue: options.OIDCAuthority,
        },
        {
          provide: OIDC_REALMS,
          useValue: options.OIDCRealms || [],
        },
        {
          provide: ROLE_EVALUATORS,
          useValue: options.roleEvaluators || [],
        },
        {
          provide: JWT_MAPPER,
          useValue: options.jwtMapper
            ? options.jwtMapper
            : (payload: unknown) => payload,
        },
      ],
    };
  }
}
