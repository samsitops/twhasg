/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ENUM_KAFKA_TOPICS,
  KafkaServiceOptions,
  kafkaModuleOptions,
  kafkaServicesConfigs,
} from '@monorepo/shared';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

import { ConfigService } from '@nestjs/config';
import { ConsumerSubscribeTopics } from 'kafkajs';
import { Logger } from '@nestjs/common';
import { NestApplication } from '@nestjs/core';

export default async function (app: NestApplication, app_name: string) {
  const configService = app.get(ConfigService);
  const logger = new Logger();

  const enable: boolean = configService.get<boolean>('consumerEnable') ?? true;
  if (enable) {
    const brokers: string[] = (kafkaModuleOptions.options?.client
      ?.brokers as string[]) ?? ['localhost:9092'];
    const clientId: string =
      kafkaModuleOptions.options?.consumer?.groupId ?? 'default';
    const consumerGroup: string =
      kafkaModuleOptions.options?.consumer?.groupId ?? 'default';

    const subscribe: ConsumerSubscribeTopics = {
      topics: Object.values(ENUM_KAFKA_TOPICS),
      ...configService.get<ConsumerSubscribeTopics>('kafka.consumerSubscribe'),
    };

    const _kafkaServiceOptions: any = {
      ...KafkaServiceOptions,
      consumer: {
        ...KafkaServiceOptions?.consumer,
        groupId: 'monorepo.' + app_name,
      },
    };

    kafkaServicesConfigs.kafka_group_id = _kafkaServiceOptions.consumer.groupId;

    app.connectMicroservice<MicroserviceOptions>({
      transport: Transport.KAFKA,
      options: {
        ..._kafkaServiceOptions,
        subscribe,
      },
    });

    logger.log(
      `Kafka server ${clientId} connected on brokers ${brokers.join(', ')}`,
      'NestApplication',
    );
    logger.log(`Kafka consume group ${consumerGroup}`, 'NestApplication');

    logger.log(`==========================================================`);
  }
}
