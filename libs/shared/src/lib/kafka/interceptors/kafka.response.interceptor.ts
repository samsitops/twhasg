import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';

import { KafkaContext } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { RpcArgumentsHost } from '@nestjs/common/interfaces';
import { map } from 'rxjs/operators';

@Injectable()
export class KafkaResponseInterceptor implements NestInterceptor<Promise<unknown>> {
  async intercept(
    context: ExecutionContext,
    next: CallHandler
  ): Promise<Observable<Promise<unknown> | string>> {
    const ctx: RpcArgumentsHost = context.switchToRpc();
    const { headers, key } = ctx.getContext<KafkaContext>().getMessage();

    return next.handle().pipe(
      map((response: Record<string, unknown>) => {
        if (response) {
          delete response['__class'];
          delete response['__function'];

          return JSON.stringify({
            headers,
            key,
            value: response,
          });
        }

        return JSON.stringify({
          headers,
          key,
          value: undefined,
        });
      })
    );
  }
}
