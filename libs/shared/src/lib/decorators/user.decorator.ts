import { ExecutionContext, createParamDecorator } from '@nestjs/common';

import { JwtPayload } from 'jsonwebtoken';

export const User = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): JwtPayload => {
    const request = ctx.switchToHttp().getRequest();
    const user = request.user;

    return data ? user?.[data as keyof typeof user] : user;
  }
);
