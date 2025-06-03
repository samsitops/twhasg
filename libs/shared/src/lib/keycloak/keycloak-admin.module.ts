import { ConfigModule } from '@monorepo/config';
import { HttpModule } from '@nestjs/axios';
import { KeycloakAdminService } from './keycloak-admin.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [HttpModule, ConfigModule],
  providers: [KeycloakAdminService],
  exports: [KeycloakAdminService],
})
export class KeycloakAdminModule {}
