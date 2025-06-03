// health check controller
import { Controller, Get } from '@nestjs/common';

import { HealthCheckService } from '../services/health-check.service';

@Controller()
export class HealthCheckController {
  constructor(private readonly healthCheckService: HealthCheckService) { }

  // microservice health check
  @Get('health')
  healthCheck() {
    return this.healthCheckService.healthCheck();
  }


  @Get('ping')
  ping() {
    return 'pong';
  }

}
