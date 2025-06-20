export const KAFKA_SERVICE_NAME = 'KAFKA_SERVICE';

export enum ENUM_ERROR_STATUS_CODE_ERROR {
  ERROR_UNKNOWN = 5050,
  ERROR_SERVICE_UNAVAILABLE = 5051,
  ERROR_REQUEST_TIMEOUT = 5052,
}
export enum ENUM_REQUEST_STATUS_CODE_ERROR {
  REQUEST_VALIDATION_ERROR = 5070,
  REQUEST_TIMESTAMP_INVALID_ERROR = 5071,
  REQUEST_USER_AGENT_INVALID_ERROR = 5072,
  REQUEST_USER_AGENT_OS_INVALID_ERROR = 5073,
  REQUEST_USER_AGENT_BROWSER_INVALID_ERROR = 5074,
}
