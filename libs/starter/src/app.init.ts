import {
  AssertionErrorFilter,
  HttpExceptionFilter,
  TransformInterceptor,
} from '@monorepo/shared';
import {
  ClassSerializerInterceptor,
  Logger,
  ValidationPipe,
} from '@nestjs/common';
import { NestApplication, NestFactory, Reflector } from '@nestjs/core';

import { ConfigService as BaseConfigService } from '@monorepo/config';
import { ConfigService } from '@nestjs/config';
import kafkaInit from './kafka.init';
import { join } from 'path';
import otelStarter from './tracing.init';
import swaggerInit from './swagger.init';
import { useContainer } from 'class-validator';

export async function bootstrapMonorepoNestJS(
  AppModule: any,
  app_name: string,
) {
  const otelSDK = otelStarter(app_name);
  otelSDK.start();

  const app: NestApplication = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  const host: string = configService.get<string>('app.http.host') ?? '0.0.0.0';
  const port: number = configService.get<number>('app.http.port') ?? 3000;
  const globalPrefix: string =
    configService.get<string>('app.globalPrefix') ?? 'api';

  // enable
  const httpEnable: boolean =
    configService.get<boolean>('app.http.enable') ?? true;
  const versionEnable: string =
    configService.get<string>('app.versioning.enable') ?? 'true';

  const logger = new Logger();
  // Global
  app.setGlobalPrefix(globalPrefix);

  // Enable CORS
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));
  app.useGlobalInterceptors(new TransformInterceptor());
  app.useGlobalFilters(new HttpExceptionFilter(configService));
  app.useGlobalFilters(new AssertionErrorFilter());
  // app.useGlobalFilters(new HttpExceptionConsumerFilter());

  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  // Versioning
  // if (versionEnaversionble) {
  //   app.enableVersioning({
  //     type: VersioningType.URI,
  //     defaultVersion: version,
  //     prefix: versioningPrefix,
  //   });
  // }

  // Swagger
  await swaggerInit(app, app_name);

  // Kafka
  // await kafkaInit(app, app_name);

  app.enableShutdownHooks();

  // Listen
  await app.listen(port, host);

  logger.log(`==========================================================`);

  logger.log(
    `Http is ${httpEnable}, ${
      httpEnable ? 'routes registered' : 'no routes registered'
    }`,
    'NestApplication',
  );
  logger.log(`Http versioning is ${versionEnable}`, 'NestApplication');

  logger.log(
    `Http Server running on ${await app.getUrl()}/${globalPrefix}`,
    'NestApplication',
  );

  logger.log(`==========================================================`);

  // log configs

  logger.log(`Configs ${process.env['NODE_ENV']}`, 'NestApplication');
  logger.log(JSON.stringify(BaseConfigService.toJSON()), 'NestApplication');

  // start all microservices
  app.startAllMicroservices();

  // You can also use the shutdown method to gracefully shut down the SDK before process shutdown
  // or on some operating system signal.
  process.on('SIGTERM', () => {
    otelSDK
      .shutdown()
      .then(
        () => console.log('SDK shut down successfully'),
        (err: unknown) => console.log('Error shutting down SDK', err),
      )
      .finally(() => process.exit(0));
  });
}
