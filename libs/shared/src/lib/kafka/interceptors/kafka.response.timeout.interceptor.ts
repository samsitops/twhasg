import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, TimeoutError, throwError } from 'rxjs';
import { catchError, timeout } from 'rxjs/operators';

import { ENUM_ERROR_STATUS_CODE_ERROR } from '../constants/kafka.constant';
import { KafkaServiceOptions } from '../kafka.configs';
import { RpcException } from '@nestjs/microservices';

@Injectable()
export class KafkaResponseTimeoutInterceptor
  implements NestInterceptor<Promise<unknown>> {
  private readonly timeout: number;

  constructor() {
    this.timeout = KafkaServiceOptions.client.retry.initialRetryTime ?? 10000;
  }

  async intercept(
    context: ExecutionContext,
    next: CallHandler
  ): Promise<Observable<Promise<unknown> | string>> {
    return next.handle().pipe(
      timeout(this.timeout),
      catchError((err) => {
        if (err instanceof TimeoutError) {
          throw new RpcException({
            statusCode:
              ENUM_ERROR_STATUS_CODE_ERROR.ERROR_REQUEST_TIMEOUT,
            message: 'http.clientError.requestTimeOut',
          });
        }
        return throwError(() => err);
      })
    );

    return next.handle();
  }
}
