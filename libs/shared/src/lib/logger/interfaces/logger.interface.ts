/* eslint-disable @typescript-eslint/no-explicit-any */
import { ENUM_LOGGER_LEVEL } from '../constants/logger.enum.constant';

export interface ILoggerOptions {
  description?: string;
  tags?: string[];
  level?: ENUM_LOGGER_LEVEL;
}


export interface IRequestApp extends Request {
  apiKey?: any;
  user?: Record<string, any>;
  path?: string;
  originalUrl: string;
  params?: Record<string, any>;
  __id: string;
  __xTimestamp?: number;
  __timestamp: number;
  __timezone: string;
  __customLang: string[];
  __xCustomLang: string;
  __version: string;
  __repoVersion: string;
  __userAgent: any;

  __class?: string;
  __function?: string;

  __filters?: Record<
    string,
    string | number | boolean | Array<string | number | boolean>
  >;
  __pagination?: any;
}
