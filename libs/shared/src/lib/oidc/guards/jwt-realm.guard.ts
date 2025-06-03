import * as jsonwebtoken from 'jsonwebtoken';

import { CanActivate, ExecutionContext, Injectable, Logger } from '@nestjs/common';

import { IsJWT } from 'class-validator';
import { Reflector } from '@nestjs/core';

export const Realms = Reflector.createDecorator<string[]>();


@Injectable()
export class RealmsGuard implements CanActivate {
  constructor(private reflector: Reflector) { }

  canActivate(context: ExecutionContext): boolean {
    const realms = this.reflector.get(Realms, context.getHandler());
    if (!realms) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const accessToken = request.headers.authorization.split(' ')[1];

    Logger.verbose(`Checking if token is allowed for realms: ${realms}`);

    if (IsJWT(accessToken)) {
      const jwt = jsonwebtoken.decode(accessToken, { complete: true });
      if (
        jwt &&
        jwt.payload &&
        typeof jwt.payload == 'object' &&
        jwt.payload.iss
      ) {
        // realm is last part of the issuer;
        const realm = jwt.payload.iss.split('/').pop();
        if (realm == null) {
          return false;
        }
        return realms.includes(realm as string);
      }
    }

    return false;
  }
}
