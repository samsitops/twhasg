import { Controller } from '@nestjs/common';

import {
  MessageCommitOffsetInFirstRunning,
  MessageTopic,
  MessageValue,
} from '../decorators/kafka.decorator';
import { IKafkaResponse } from '../interfaces/kafka.interface';
import { KafkaDto } from '../dtos/kafka.dto';
import { Logger } from '../../decorators/logger.decorator';
import { ENUM_LOGGER_ACTION } from '../../enums/logger.enum.constant';
import { ENUM_KAFKA_TOPICS } from '../constants/kafka.topic.constant';

@Controller()
export class KafkaController {
  @Logger(ENUM_LOGGER_ACTION.TEST, { tags: ['helloKafka'] })
  @MessageCommitOffsetInFirstRunning()
  @MessageTopic(ENUM_KAFKA_TOPICS.ACK_SUCCESS)
  async helloKafka(
    @MessageValue() value: Record<string, unknown>,
  ): Promise<IKafkaResponse> {
    return value;
  }

  @Logger(ENUM_LOGGER_ACTION.TEST, { tags: ['helloKafkaError'] })
  @MessageCommitOffsetInFirstRunning()
  @MessageTopic(ENUM_KAFKA_TOPICS.ACK_ERROR)
  async errorKafka(@MessageValue() value: KafkaDto): Promise<IKafkaResponse> {
    return value;
  }
}
