import { ExtractJwt, Strategy } from 'passport-jwt';

import { AuthService } from '../services';
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { RoleBasedUser } from '../services/auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKeyProvider: authService.keyProvider,
    });
  }

  async validate<T>(payload: unknown): Promise<RoleBasedUser<T>> {
    return this.authService.validate(payload);
  }
}
