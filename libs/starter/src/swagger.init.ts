import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';
import { NestApplication } from '@nestjs/core';

export default async function (app: NestApplication, app_name: string) {
  const configService = app.get(ConfigService);
  const logger = new Logger();

  const docName: string = app_name;
  const docDesc: string = configService.get<string>('doc.description') ?? 'API Documentation';
  const docVersion: string = configService.get<string>('doc.version') ?? '1.0';
  const docPrefix: string = configService.get<string>('doc.prefix') ?? 'docs';

  if (process.env['NODE_ENV'] !== 'production') {
    const documentBuild = new DocumentBuilder()
      .setTitle(docName)
      .setDescription(docDesc)
      .setVersion(docVersion)
      .addTag("API's")
      .addBearerAuth(
        { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
        'accessToken'
      )
      .addBearerAuth(
        { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
        'refreshToken'
      )
      .addApiKey(
        { type: 'apiKey', in: 'header', name: 'x-api-key' },
        'apiKey'
      )
      .build();

    const document = SwaggerModule.createDocument(app, documentBuild, {
      deepScanRoutes: true,
      extraModels: [

      ],
    });

    SwaggerModule.setup(docPrefix, app, document, {
      explorer: true,
      customSiteTitle: docName,
      jsonDocumentUrl: 'swagger/json',
    });

    logger.log(
      `==========================================================`
    );

    logger.log(`Docs will serve on ${docPrefix}`, 'NestApplication');

    logger.log(
      `==========================================================`
    );
  }
}
