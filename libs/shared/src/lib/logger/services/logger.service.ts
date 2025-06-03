/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable, Logger } from "@nestjs/common";
import { LoggerCreateDto, LoggerCreateRawDto } from "../dtos/logger.create.dto";

import { ENUM_LOGGER_LEVEL } from "../constants/logger.enum.constant";
import { ILoggerService } from "../interfaces/logger.service.interface";

@Injectable()
export class LoggerService implements ILoggerService {
  private readonly logger = new Logger(LoggerService.name);

  constructor() {
    this.logger.log("LoggerService initialized");
  }

  async info({
    action,
    description,
    apiKey,
    user,
    method,
    requestId,
    role,
    type,
    params,
    bodies,
    path,
    statusCode,
    tags,
  }: LoggerCreateDto) {
    const create: any = {};
    create.level = ENUM_LOGGER_LEVEL.INFO;
    create.user = user;
    create.apiKey = apiKey;
    create.anonymous = !user;
    create.action = action;
    create.description = description;
    create.method = method;
    create.requestId = requestId;
    create.role = role;
    create.type = type;
    create.params = params;
    create.bodies = bodies;
    create.path = path;
    create.statusCode = statusCode;
    create.tags = tags;

    return this.logger.log(create);
  }

  async debug({
    action,
    description,
    apiKey,
    user,
    method,
    requestId,
    role,
    type,
    params,
    bodies,
    path,
    statusCode,
    tags,
  }: LoggerCreateDto) {
    const create: any = {};
    create.level = ENUM_LOGGER_LEVEL.DEBUG;
    create.user = user;
    create.apiKey = apiKey;
    create.anonymous = !user;
    create.action = action;
    create.description = description;
    create.method = method;
    create.requestId = requestId;
    create.role = role;
    create.type = type;
    create.params = params;
    create.bodies = bodies;
    create.path = path;
    create.statusCode = statusCode;
    create.tags = tags;

    return this.logger.debug(create);
  }

  async warn({
    action,
    description,
    apiKey,
    user,
    method,
    requestId,
    role,
    type,
    params,
    bodies,
    path,
    statusCode,
    tags,
  }: LoggerCreateDto) {
    const create: any = {};
    create.level = ENUM_LOGGER_LEVEL.WARN;
    create.user = user;
    create.apiKey = apiKey;
    create.anonymous = !user;
    create.action = action;
    create.description = description;
    create.method = method;
    create.requestId = requestId;
    create.role = role;
    create.type = type;
    create.params = params;
    create.bodies = bodies;
    create.path = path;
    create.statusCode = statusCode;
    create.tags = tags;

    return this.logger.warn(create);
  }

  async fatal({
    action,
    description,
    apiKey,
    user,
    method,
    requestId,
    role,
    type,
    params,
    bodies,
    path,
    statusCode,
    tags,
  }: LoggerCreateDto) {
    const create: any = {};
    create.level = ENUM_LOGGER_LEVEL.FATAL;
    create.user = user;
    create.apiKey = apiKey;
    create.anonymous = !user;
    create.action = action;
    create.description = description;
    create.method = method;
    create.requestId = requestId;
    create.role = role;
    create.type = type;
    create.params = params;
    create.bodies = bodies;
    create.path = path;
    create.statusCode = statusCode;
    create.tags = tags;

    return this.logger.error(create);
  }

  async raw({
    level,
    action,
    description,
    apiKey,
    user,
    method,
    requestId,
    role,
    type,
    params,
    bodies,
    path,
    statusCode,
    tags,
  }: LoggerCreateRawDto) {
    const create: any = {};
    create.level = level;
    create.user = user;
    create.apiKey = apiKey;
    create.anonymous = !user;
    create.action = action;
    create.description = description;
    create.method = method;
    create.requestId = requestId;
    create.role = role;
    create.type = type;
    create.params = params;
    create.bodies = bodies;
    create.path = path;
    create.statusCode = statusCode;
    create.tags = tags;

    return this.logger.log(create);
  }
}
