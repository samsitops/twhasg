/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  CallHandler,
  ExecutionContext,
  HttpException,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { FORMAT_HTTP_HEADERS, Tracer } from 'opentracing';
import { catchError, tap } from 'rxjs/operators';

import { ConfigService } from '@monorepo/config';
import { Observable } from 'rxjs';
import { initTracer } from 'jaeger-client';

@Injectable()
export class TracingSenderInterceptor implements NestInterceptor {
  private tracer: Tracer;
  constructor() {
    const config = {
      serviceName: 'GATEWAY',
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

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();

    const span = this.tracer.startSpan(context.getHandler().name);
    const headers = {};

    this.tracer.inject(span, FORMAT_HTTP_HEADERS, headers);

    request['headersTrace'] = { ...request.headers, ...headers };

    span.log({
      request: {
        method: request.method,
        url: request.url,
        headers: request.headers,
        body: request.body,
      },
    });

    return next.handle().pipe(
      tap(() => {
        span.finish();
      }),
      catchError((error) => {
        // Handle error
        span.setTag('error', true);
        span.log({
          event: 'error',
          'error.object': error,
          message: error.message,
          stack: error.stack,
        });
        span.finish();
        throw new HttpException(
          error.response || error.message,
          error.status || 400,
        );
      }),
    );
  }
}
