import {
  CallHandler,
  ExecutionContext,
  HttpStatus,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { FORMAT_HTTP_HEADERS, Tracer } from 'opentracing';
import { catchError, tap } from 'rxjs/operators';

import { ConfigService } from '@monorepo/config';
import { initTracer } from 'jaeger-client';
import { of } from 'rxjs';

@Injectable()
export class TracingReceiverInterceptor implements NestInterceptor {
  private tracer: Tracer;
  private headerStatic: any;

  constructor() {
    const config = {
      serviceName: 'AUTH',
      sampler: {
        type: 'const',
        param: 1,
      },
      reporter: {
        collectorEndpoint: String(ConfigService.get().tracing?.host),
        logSpans: true,
      },
    };

    this.tracer = initTracer(config, {});
  }

  intercept(context: ExecutionContext, next: CallHandler): any {
    const request = context.switchToHttp().getRequest();

    const name = context.getHandler().name;

    if (request.headersTrace) {
      this.headerStatic = request.headersTrace;
    }

    if (this.headerStatic) {
      const spanContext = this.tracer.extract(
        FORMAT_HTTP_HEADERS,
        this.headerStatic,
      );

      const span = this.tracer.startSpan(name, { childOf: spanContext as any });

      span.log({ details: request });

      return next.handle().pipe(
        tap(() => {
          span.finish();
        }),
        catchError((error: any) => {
          span.setTag('error', true);
          span.log({
            event: 'error',
            'error.object': error,
            message: error.message,
            stack: error.stack,
          });
          span.finish();

          return of({
            statusCode: error.status || HttpStatus.BAD_REQUEST,
            timestamp: new Date().toISOString(),
            message: error.message,
          });
        }),
      );
    }

    return next.handle();
  }
}
