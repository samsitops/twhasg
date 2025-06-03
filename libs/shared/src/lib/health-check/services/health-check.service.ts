// microservice healthcheck service

import { Injectable } from '@nestjs/common';

@Injectable()
export class HealthCheckService {
  healthCheck(): { status: string; message: string } {
    return {
      status: 'ok',
      message: 'Microservice is running',
    };
  }
}
