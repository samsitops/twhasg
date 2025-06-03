import { Injectable } from '@nestjs/common';

@Injectable()
export class LoggerRepository {
  private readonly logger = LoggerRepository.name;
  constructor(

  ) {
    this.logger = LoggerRepository.name
  }
}
