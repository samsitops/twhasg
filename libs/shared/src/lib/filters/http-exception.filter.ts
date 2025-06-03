import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AssertionError } from 'assert';
import { Request, Response } from 'express';

@Catch(AssertionError)
export class AssertionErrorFilter implements ExceptionFilter {
  catch(exception: AssertionError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = 400;

    response.status(400).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      response: exception.message,
      path: request.url,
    });
  }
}

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(HttpExceptionFilter.name);
  private readonly isDevelopment: boolean;

  constructor(configService: ConfigService) {
    // Determine if running in development mode
    this.isDevelopment = configService.get<string>('NODE_ENV') !== 'production';
  }

  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    // Initialize default values
    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message: string | object = 'Internal server error';
    let stack: string[] | undefined;

    // Handle different types of exceptions
    if (exception instanceof HttpException) {
      status = exception.getStatus();
      message = exception.getResponse();
      stack = exception.stack?.split('\n').map((line) => line.trim());
    } else if (exception instanceof AssertionError) {
      status = HttpStatus.BAD_REQUEST;
      message = exception.message;
      stack = exception.stack?.split('\n').map((line) => line.trim());
    } else if (exception instanceof Error) {
      // Handle other generic errors
      message = exception.message || 'An unexpected error occurred';
      stack = exception.stack?.split('\n').map((line) => line.trim());
    } else {
      // Handle non-Error objects (rare cases)
      message = 'An unexpected error occurred';
    }

    // Log the error (skip 404s to reduce noise)
    if (status !== HttpStatus.NOT_FOUND) {
      this.logger.error(
        `Error: ${JSON.stringify(message)}`,
        stack || new Error().stack,
        `Request: ${request.method} ${request.url}`,
      );
    } else {
      this.logger.debug(`Not Found: ${request.method} ${request.url}`);
    }

    // Prepare the response
    const errorResponse = {
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      method: request.method,
      message:
        typeof message === 'string'
          ? message
          : { ...message, message: (message as any).message || 'Error' },
      ...(this.isDevelopment && stack ? { stack } : {}), // Include stack trace only in development
    };

    // Send the response
    response.status(status).json(errorResponse);
  }
}
