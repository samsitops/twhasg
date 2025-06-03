import { HealthCheckController } from './controllers/health-check.controller';
import { HealthCheckService } from './services/health-check.service';
import { Module } from '@nestjs/common';

@Module({
  controllers: [
    HealthCheckController,
  ],
  providers: [
    HealthCheckService
  ],
})
export class HealthCheckModule { }
