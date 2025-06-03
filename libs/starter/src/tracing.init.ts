import { B3InjectEncoding, B3Propagator } from '@opentelemetry/propagator-b3';
import {
  CompositePropagator,
  W3CBaggagePropagator,
  W3CTraceContextPropagator,
} from '@opentelemetry/core';
import { AsyncLocalStorageContextManager } from '@opentelemetry/context-async-hooks';
import { ExpressInstrumentation } from '@opentelemetry/instrumentation-express';
import { HttpInstrumentation } from '@opentelemetry/instrumentation-http';
import { JaegerPropagator } from '@opentelemetry/propagator-jaeger';
import { KafkaJsInstrumentation } from 'opentelemetry-instrumentation-kafkajs';
import { NestInstrumentation } from '@opentelemetry/instrumentation-nestjs-core';
import { NodeSDK, tracing } from '@opentelemetry/sdk-node';
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http';
import { Resource } from '@opentelemetry/resources';

export default function otlStarter(app_name: string) {
  const otel_host = process.env['OTEL_EXPORTER_OTLP_SPAN_HOST'] || 'localhost';

  const traceExporter = new OTLPTraceExporter({
    timeoutMillis: 15000,
    concurrencyLimit: 10,
    url: `http://${otel_host}:4318/v1/traces`,
  });

  const otelSDK = new NodeSDK({
    spanProcessors: [new tracing.SimpleSpanProcessor(traceExporter)],
    contextManager: new AsyncLocalStorageContextManager(),
    textMapPropagator: new CompositePropagator({
      propagators: [
        new JaegerPropagator(),
        new W3CTraceContextPropagator(),
        new W3CBaggagePropagator(),
        new B3Propagator(),
        new B3Propagator({
          injectEncoding: B3InjectEncoding.MULTI_HEADER,
        }),
      ],
    }),
    instrumentations: [
      new NestInstrumentation({
        enabled: true,
      }),
      new ExpressInstrumentation(),
      new HttpInstrumentation(),
      new KafkaJsInstrumentation(),
    ],
    resource: new Resource({
      'service.name': 'monorepo.' + app_name,
    }),
  });

  return otelSDK;
}
