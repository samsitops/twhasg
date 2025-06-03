/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ExecutionContext,
  UseFilters,
  UseInterceptors,
  UsePipes,
  applyDecorators,
  createParamDecorator,
} from '@nestjs/common';
import {
  KafkaContext,
  MessagePattern,
  Payload,
  Transport,
} from '@nestjs/microservices';

import { KafkaCommitOffsetFirstInterceptor } from '../interceptors/kafka.commit-offset-first.interceptor';
import { KafkaErrorFilter } from '../error/filters/kafka.error.filter';
import { KafkaResponseInterceptor } from '../interceptors/kafka.response.interceptor';
import { KafkaResponseTimeoutInterceptor } from '../interceptors/kafka.response.timeout.interceptor';
import { KafkaValidationPipe } from '../pipes/kafka.validation.pipe';

export function MessageTopic(topic: string): any {
  return applyDecorators(
    MessagePattern(topic, Transport.KAFKA),
    UseInterceptors(KafkaResponseInterceptor, KafkaResponseTimeoutInterceptor),
    UseFilters(KafkaErrorFilter),
    UsePipes(KafkaValidationPipe),
  );
}

export const MessageValue = Payload;

export const MessageHeader = createParamDecorator<string>(
  (field: string, ctx: ExecutionContext): Record<string, unknown> => {
    const context: KafkaContext = ctx.switchToRpc().getContext();
    const headers: Record<string, unknown> = context.getMessage().headers ?? {};
    return (field && headers ? headers[field] : headers) as Record<
      string,
      unknown
    >;
  },
);

export const MessageKey = createParamDecorator<string>(
  (field: string, ctx: ExecutionContext): string => {
    const context: KafkaContext = ctx.switchToRpc().getContext();
    const key: string = context.getMessage()?.key?.toString() ?? '';
    return key;
  },
);

export function MessageCommitOffsetInFirstRunning(): any {
  return applyDecorators(UseInterceptors(KafkaCommitOffsetFirstInterceptor));
}
