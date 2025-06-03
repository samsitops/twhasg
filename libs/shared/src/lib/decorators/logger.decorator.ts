import { LOGGER_ACTION_META_KEY, LOGGER_OPTIONS_META_KEY } from "../enums/logger.constant";
import { SetMetadata, UseInterceptors, applyDecorators } from "@nestjs/common";

import { ENUM_LOGGER_ACTION } from "../enums/logger.enum.constant";
import { ILoggerOptions } from "../interfaces/logger/logger.interface";
import { LoggerInterceptor } from "../logger/interceptors/logger.interceptor";

export function Logger(
  action: ENUM_LOGGER_ACTION,
  options?: ILoggerOptions
): MethodDecorator {
  return applyDecorators(
    UseInterceptors(LoggerInterceptor),
    SetMetadata(LOGGER_ACTION_META_KEY, action),
    SetMetadata(LOGGER_OPTIONS_META_KEY, options ?? {})
  );
}
