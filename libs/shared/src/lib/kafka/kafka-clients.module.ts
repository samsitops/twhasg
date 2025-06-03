import { ClientsModule, Transport } from "@nestjs/microservices";

import { KafkaService } from "./services/kafka.service";
import { KafkaServiceOptions } from "./kafka.configs";
import { Module } from "@nestjs/common";

@Module({
  imports: [
    ClientsModule.register([
      {
        name: KafkaServiceOptions?.consumer?.groupId ?? "default",
        transport: Transport.KAFKA,
        options: KafkaServiceOptions,
      },
    ]),
  ],
  controllers: [],
  providers: [KafkaService],
  exports: [ClientsModule, KafkaService],
})
export class KafkaClientsModule { }
