import { HttpException, HttpStatus } from '@nestjs/common';

import { ENUM_ERROR_STATUS_CODE_ERROR } from '../../constants/kafka.constant';
import { IKafkaErrorException } from '../../interfaces/kafka.interface';

export class KafkaHttpException extends HttpException {
  constructor(exception: IKafkaErrorException) {
    if (
      'message' in exception &&
      'statusCode' in exception &&
      'statusHttp' in exception
    ) {
      const { statusHttp, ...data } = exception;
      super(data, statusHttp);
    } else {
      super(
        {
          statusCode: ENUM_ERROR_STATUS_CODE_ERROR.ERROR_UNKNOWN,
          message: 'http.serverError.internalServerError',
        },
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }
}
