import { KafkaController } from '../controllers/kafka.controller';
import { Module } from '@nestjs/common';

@Module({
  providers: [],
  exports: [],
  imports: [],
  controllers: [KafkaController],
})
export class KafkaRouterModule { }
