import {
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import { IS_AUTHENTICATION_OPTIONAL_TOKEN, ROLES_TOKEN } from '..';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(protected readonly reflector: Reflector) {
    super();
  }

  override getRequest(context: ExecutionContext) {
    return context.switchToHttp().getRequest();
  }

  override async canActivate(context: ExecutionContext): Promise<boolean> {
    const isAuthOptional = this.reflector.get<boolean>(
      IS_AUTHENTICATION_OPTIONAL_TOKEN,
      context.getHandler(),
    );
    const isPublic = this.reflector.get<boolean>(
      'isPublic',
      context.getHandler(),
    );
    if (isPublic) {
      return true; // Skip auth for public routes
    }

    try {
      await super.canActivate(context);
    } catch (err) {
      const isUnauthorized = err instanceof UnauthorizedException;
      if (!isUnauthorized || (isUnauthorized && !isAuthOptional)) {
        throw err;
      }
    }

    const roles = this.reflector.get<string[]>(
      ROLES_TOKEN,
      context.getHandler(),
    );
    if (!roles) {
      return true;
    }

    const request = this.getRequest(context);
    const user = request.user;

    if (!user) {
      return true;
    } else {
      const client = user.azp;
      return (
        user &&
        user.resource_access[client].roles &&
        user.resource_access[client].roles.some((role: string) =>
          roles.includes(role),
        )
      );
    }
  }
}
