import { ConfigModule } from '@monorepo/config';
import { HttpModule } from '@nestjs/axios';
import { InternalComsService } from './internal-coms.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [HttpModule, ConfigModule],
  providers: [InternalComsService],
  exports: [InternalComsService],
})
export class InternalComsModule {}
