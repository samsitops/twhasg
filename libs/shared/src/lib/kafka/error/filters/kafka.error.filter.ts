import { ArgumentsHost, Catch, Logger } from '@nestjs/common';
import { KafkaContext, RpcException } from '@nestjs/microservices';
import { Observable, of } from 'rxjs';
import {
  RpcArgumentsHost,
  RpcExceptionFilter,
} from '@nestjs/common/interfaces';

@Catch(RpcException)
export class KafkaErrorFilter implements RpcExceptionFilter<RpcException> {
  private readonly logger = new Logger(KafkaErrorFilter.name);

  catch(exception: RpcException, host: ArgumentsHost): Observable<any> {
    const ctx: RpcArgumentsHost = host.switchToRpc();
    const { __class, __function } = ctx.getData();
    const { key } = ctx.getContext<KafkaContext>().getMessage();

    // Debugger
    try {
      this.logger.error(
        key ? key.toString() : KafkaErrorFilter.name,
        {
          description: exception.message,
          class: __class,
          function: __function,
        },
        exception
      );
    } catch (err: unknown) { }

    return of(JSON.stringify({ error: exception.getError() }));
  }
}
