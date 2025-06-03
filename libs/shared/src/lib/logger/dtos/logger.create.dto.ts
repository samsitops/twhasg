/* eslint-disable @typescript-eslint/no-explicit-any */
import { ENUM_LOGGER_ACTION, ENUM_LOGGER_LEVEL, ENUM_LOGGER_METHOD } from "../constants/logger.enum.constant";

export enum ENUM_ROLE_TYPE {
  SUPER_ADMIN = 'SUPER_ADMIN',
  USER = 'USER',
  ADMIN = 'ADMIN',
  SYSTEM = 'SYSTEM',
}


export class LoggerCreateDto {
  action: ENUM_LOGGER_ACTION = ENUM_LOGGER_ACTION.TEST;
  description: string | undefined;
  apiKey?: string;
  user?: string;
  requestId?: string;
  method: ENUM_LOGGER_METHOD = ENUM_LOGGER_METHOD.RPC;
  path: string | undefined;
  role?: string;
  type?: ENUM_ROLE_TYPE;
  tags?: string[];
  params?: Record<string, any>;
  bodies?: any;
  statusCode?: number;
}

export class LoggerCreateRawDto extends LoggerCreateDto {
  level: ENUM_LOGGER_LEVEL = ENUM_LOGGER_LEVEL.DEBUG;
}
