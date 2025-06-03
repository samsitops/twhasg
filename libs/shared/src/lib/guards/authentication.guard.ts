import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
} from '@nestjs/common';

import { HttpService } from '@nestjs/axios';
import { AUTH_TOPICS } from '@monorepo/consts';
import { KeycloakAdminService } from '@monorepo/shared';
import * as jwt from 'jsonwebtoken';
import { KafkaService } from '../kafka';
@Injectable()
export class AuthenticationGuard implements CanActivate {
  constructor(
    @Inject()
    private readonly kService: KafkaService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request: any = context.switchToHttp().getRequest();

    const header = request.header('Authorization');
    if (!header) {
      throw new HttpException(
        'Authorization: Bearer <token> header missing',
        HttpStatus.UNAUTHORIZED,
      );
    }

    const parts = header.split(' ');
    if (parts.length !== 2 || parts[0] !== 'Bearer') {
      throw new HttpException(
        'Authorization: Bearer <token> header invalid',
        HttpStatus.UNAUTHORIZED,
      );
    }

    const token = parts[1];
    const decodedToken: any = jwt.decode(token as string);

    try {
      request['token'] = token;
      request['id'] = decodedToken?.sub;

      request['realm'] = decodedToken?.iss
        ? decodedToken?.iss?.split('/').pop()
        : null;

      const httpService = new HttpService();

      const accessToken = await new KeycloakAdminService(
        httpService,
      ).getAccessToken();

      const userInfo = await this.kService.produceSend(AUTH_TOPICS.USER_INFO, {
        realm: request['realm'],
        data: { token: accessToken, id: request['id'] },
      });

      request['user'] = userInfo;

      return true;
    } catch (error) {
      throw new HttpException(
        'Authentication Error ' + error,
        HttpStatus.UNAUTHORIZED,
      );
    }
  }
}
