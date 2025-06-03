import { Global, Module } from '@nestjs/common';

import { LoggerService } from './services/logger.service';

@Global()
@Module({
  providers: [LoggerService],
  exports: [LoggerService],
  imports: [],
})
export class LoggerModule { }
