import { Catch, ExceptionFilter, HttpException } from '@nestjs/common';

@Catch(HttpException)
export class HttpExceptionConsumerFilter implements ExceptionFilter {
  catch(exception: HttpException) {
    const status = exception.getStatus();

    return {
      statusCode: status,
      timestamp: new Date().toISOString(),
      message: exception.getResponse(),
    };
  }
}
