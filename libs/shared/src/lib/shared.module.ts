import { ConfigService } from '@monorepo/config';
import { Module } from '@nestjs/common';
import { ConfigModule as ConfigModuleSource } from '@nestjs/config';
import { OpenTelemetryModule } from 'nestjs-otel';
import { HealthCheckModule } from './health-check/health-check.module';
import { InternalComsModule } from './internal-coms/internal-coms.module';
import { LoggerModule } from './logger/logger.module';
import { OIDCModule } from './oidc/oidc.module';
import { BunkerModule } from './services/bunker/bunker.module';
import { SharedService } from './services/shared.service';
import { KeycloakAdminModule } from './keycloak/keycloak-admin.module';

@Module({
  imports: [
    BunkerModule,
    InternalComsModule,
    KeycloakAdminModule,
    LoggerModule,
    OIDCModule.forRoot({
      OIDCAuthority: ConfigService.get().OIDC.host + '/realms/',
      OIDCRealms: ConfigService.get().OIDC.realms ?? ['master', 'users'],
    }),

    HealthCheckModule,
    ConfigModuleSource.forRoot({ isGlobal: true, cache: true }),
    OpenTelemetryModule.forRoot({
      metrics: {
        hostMetrics: true, // Includes Host Metrics
        apiMetrics: {
          enable: true, // Includes api metrics
          ignoreRoutes: ['/favicon.ico'], // You can ignore specific routes (See https://docs.nestjs.com/middleware#excluding-routes for options)
          ignoreUndefinedRoutes: false, //Records metrics for all URLs, even undefined ones
          prefix: 'my_prefix', // Add a custom prefix to all API metrics

          defaultAttributes: {
            // You can set default labels for api metrics
            label: 'notification',
            namespace: 'monorepo.',
            'service.name': 'notification',
          },
        },
      },
    }),
  ],
  controllers: [],
  providers: [SharedService],
  exports: [HealthCheckModule, InternalComsModule, KeycloakAdminModule],
})
export class SharedModule {}
