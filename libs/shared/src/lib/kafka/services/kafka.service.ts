import {
  Inject,
  Injectable,
  Logger,
  OnApplicationBootstrap,
} from '@nestjs/common';
import { ClientKafka, KafkaContext } from '@nestjs/microservices';
import { randomUUID } from 'crypto';
import moment from 'moment';
import { Observable, firstValueFrom, timeout } from 'rxjs';
import { ENUM_KAFKA_TOPICS } from '../constants/kafka.topic.constant';
import {
  IKafkaMessage,
  IKafkaProducerMessageOptions,
  IKafkaProducerSendMessageOptions,
} from '../interfaces/kafka.interface';
import { IKafkaService } from '../interfaces/kafka.service.interface';
import { KafkaServiceOptions } from '../kafka.configs';

// note:
// if we want create sequential execution
// key must same, maxInFlightRequests set to 1
// and topic mush created with 1 partition and 1 replication

export class kafkaServicesConfigs {
  static kafka_group_id = null;
}

@Injectable()
export class KafkaService implements IKafkaService, OnApplicationBootstrap {
  private readonly timeout: number;
  protected logger = new Logger(KafkaService.name);

  constructor(
    @Inject(
      kafkaServicesConfigs.kafka_group_id ??
        KafkaServiceOptions?.consumer?.groupId ??
        'kafka-consumer',
    )
    private readonly clientKafka: ClientKafka,
  ) {
    this.timeout =
      KafkaServiceOptions?.client?.retry?.initialRetryTime ?? 10000;
  }

  async onApplicationBootstrap(): Promise<void> {
    Object.values(ENUM_KAFKA_TOPICS).forEach((topic) =>
      this.clientKafka.subscribeToResponseOf(topic),
    );

    await this.clientKafka.connect();

    this.logger.log('Kafka Client Connected');
  }

  async produceSend<T, N>(
    topic: string,
    data: T,
    options?: IKafkaProducerSendMessageOptions,
  ): Promise<IKafkaMessage<N> | N> {
    const message: IKafkaMessage<T> = {
      key: this.createId(),
      ...data,
      headers: options && options.headers ? options.headers : undefined,
    };

    const send = await firstValueFrom(
      this.clientKafka
        .send(topic, JSON.stringify(message))
        .pipe(timeout(this.timeout)),
    );

    if (send.error) {
      throw send.error;
    }

    return options && options.raw ? send : send.value;
  }

  produceEmit<T, N>(
    topic: string,
    data: T,
    options?: IKafkaProducerMessageOptions,
  ): Observable<N> {
    const message: IKafkaMessage<T> = {
      key: this.createId(),
      ...data,
      headers: options && options.headers ? options.headers : undefined,
    };

    return this.clientKafka
      .emit(topic, JSON.stringify(message))
      .pipe(timeout(this.timeout));
  }

  async produceSendSequential<T, N = unknown>(
    topic: string,
    data: T,
    options?: IKafkaProducerSendMessageOptions,
  ): Promise<N> {
    const message: IKafkaMessage<T> = {
      key: `${topic}-sequential-key`,
      ...data,
      headers: options && options.headers ? options.headers : undefined,
    };

    const send = await firstValueFrom(
      this.clientKafka
        .send(topic, JSON.stringify(message))
        .pipe(timeout(this.timeout)),
    );

    if (send.error) {
      throw send.error;
    }

    return options && options.raw ? send : send.value;
  }

  produceEmitSequential<T, N = unknown>(
    topic: string,
    data: T,
    options?: IKafkaProducerMessageOptions,
  ): Observable<N> {
    const message: IKafkaMessage<T> = {
      key: `${topic}-sequential-key`,
      ...data,
      headers: options && options.headers ? options.headers : undefined,
    };

    return this.clientKafka
      .emit(topic, JSON.stringify(message))
      .pipe(timeout(this.timeout));
  }

  createId(): string {
    const rand: string = randomUUID();
    const timestamp = `${moment().unix()}`;
    return `${timestamp}-${rand}`;
  }

  async commitOffsets(context: KafkaContext): Promise<void> {
    const originalMessage = context.getMessage();
    const kafkaTopic = context.getTopic();
    const kafkaPartition = context.getPartition();
    const { offset } = originalMessage;

    return this.clientKafka.commitOffsets([
      { topic: kafkaTopic, partition: kafkaPartition, offset },
    ]);
  }
}
