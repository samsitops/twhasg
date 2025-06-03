import { ENUM_KAFKA_REQUEST_METHOD, ENUM_REQUEST_METHOD } from "../../kafka/constants/kafka.enum.constant";

export enum ENUM_LOGGER_LEVEL {
  DEBUG = 'DEBUG',
  INFO = 'INFO',
  WARN = 'WARN',
  FATAL = 'FATAL',
}

export enum ENUM_LOGGER_ACTION {
  TEST = 'TEST',
  PII = "PII"
}

export const ENUM_LOGGER_METHOD = {
  ...ENUM_KAFKA_REQUEST_METHOD,
  ...ENUM_REQUEST_METHOD,
};

export type ENUM_LOGGER_METHOD =
  | ENUM_KAFKA_REQUEST_METHOD
  | ENUM_REQUEST_METHOD;
