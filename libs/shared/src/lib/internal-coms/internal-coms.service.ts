import { Injectable, Logger } from '@nestjs/common';
import { RawAxiosRequestHeaders } from 'axios';

import { ConfigService } from '@monorepo/config';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class InternalComsService {
  private readonly logger = new Logger(InternalComsService.name);
  private readonly _urls = ConfigService.get().urls;
  private readonly _configs = ConfigService.get();
  constructor(private httpService: HttpService) {}

  private calcTreasuryURL(endpoint?: string): string {
    if (process.env['ENV'] == 'development') {
      return `${this._urls.proto}://${this._urls.prefix}${
        this._urls.domain
      }:3100/api${endpoint ?? ''}`;
    }

    return `${this._urls.proto}://${this._urls.prefix}${
      this._urls.domain
    }/treasury${endpoint ?? ''}`;
  }

  async get(url: string, headers: RawAxiosRequestHeaders) {
    return await lastValueFrom(
      this.httpService.get(url, {
        headers: this.sanitizeHeaders(headers),
      }),
    );
  }

  async post(url: string, body: object, headers?: RawAxiosRequestHeaders) {
    if (!headers) {
      headers = {};
    } else {
      headers = this.sanitizeHeaders(headers);
    }
    const response = await lastValueFrom(
      this.httpService.post(url, body, {
        headers: headers,
      }),
    );
    return response.data;
  }

  sanitizeHeaders(headers: RawAxiosRequestHeaders): RawAxiosRequestHeaders {
    delete headers['host'];
    delete headers['origin'];
    delete headers['referer'];
    delete headers['accept-encoding'];
    delete headers['accept-language'];
    delete headers['content-length'];
    delete headers['connection'];
    delete headers['request-start-time'];
    this.logger.verbose(
      '[InternalComsService] sanitized ' + JSON.stringify(headers),
    );
    return {
      ...headers,
    };
  }
}
