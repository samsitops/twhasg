import { KafkaOptions, Transport } from "@nestjs/microservices";

import { BrokersFunction } from "@nestjs/microservices/external/kafka.interface";
import { ConfigService } from "@monorepo/config";

export const BROKERS: string[] | BrokersFunction = ConfigService.get().kafka?.brokers;
export const RETRIES = {
  initialRetryTime: 100,
  maxRetryTime: 300000,
  factor: 2,
  multiplier: 1.5,
  retries: 10,
};


export const SASL = {
  mechanism: 'plain',
  username: ConfigService.get().kafka?.username,
  password: ConfigService.get().kafka?.password,
};


const consumerRandomize = process.env['NODE_ENV'] != 'production' ? Math.random() : 0;

export const KafkaServiceOptions: KafkaOptions['options'] = {
  client: {
    brokers: BROKERS,
    retry: RETRIES,
    sasl: {
      mechanism: 'plain',
      username: ConfigService.get().kafka?.username,
      password: ConfigService.get().kafka?.password,
    },
  },
  consumer: {
    groupId: (ConfigService.get().kafka.groupId ?? "kafka-consumer").toString() + consumerRandomize,
    retry: RETRIES,
    allowAutoTopicCreation: true,
  },
}



export const kafkaModuleOptions: KafkaOptions = {
  transport: Transport.KAFKA,
  options: KafkaServiceOptions,
}
