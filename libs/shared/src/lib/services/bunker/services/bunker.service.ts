/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpException, Injectable, Logger as NSLogger } from '@nestjs/common';

import { AxiosResponse } from 'axios';
import { BunkerFullResponse } from '../dto/bunker-full-response';
import { BunkerRegisterResponse } from '../dto/bunker-response.dto';
import { ConfigService } from '@monorepo/config';
import { HttpService } from '@nestjs/axios';
import { KeycloakPayload } from '../../../entities';
import { lastValueFrom } from 'rxjs';
import { v4 as uuid } from 'uuid';

@Injectable()
export class BunkerService {
  private readonly baseURL = String(ConfigService.get()?.dataBunker.host);
  private readonly logger = new NSLogger(BunkerService.name);

  private readonly headersRequest = {
    'Content-Type': 'application/json',
    'X-Bunker-Token': String(ConfigService.get()?.dataBunker.rootToken),
  };

  constructor(private readonly httpService: HttpService) {}

  async bunkerRegister(
    registerData: Partial<KeycloakPayload>,
  ): Promise<AxiosResponse<BunkerRegisterResponse>> {
    // TODO: remove, its for local testing only

    const url = `${this.baseURL}/v1/user`;
    try {
      const payload = this._preparePayload(registerData);

      this.logger.verbose(
        '[BunkerService.bunckerRegister :] ' + JSON.stringify(payload),
      );
      const response = await lastValueFrom(
        this.httpService.post(url, payload, {
          headers: this.headersRequest,
        }),
      );

      return response;
    } catch (error: any) {
      this.logger.error(
        '[BunkerService.bunckerRegister :] ' + JSON.stringify(error.message),
      );
      const bunkerError = 'bunker error true';

      throw new HttpException(
        bunkerError + error.response?.data?.message ||
          error?.response?.statusText,
        error.response?.status,
      );
    }
  }

  private _preparePayload(data: Partial<KeycloakPayload>) {
    const payload: Record<string, unknown> = {};
    Object.entries(data).forEach(([key, value]) => {
      if (key == 'attributes') {
        Object.entries(value).forEach(([key, value]) => {
          payload[key] = value[0];
        });
      } else {
        payload[key] = value;
      }
    });

    return payload;
  }

  async findDataByToken(token: string): Promise<BunkerFullResponse> {
    const url = `${this.baseURL}/v1/user/token/${token}`;

    try {
      const response = await lastValueFrom(
        this.httpService.get(url, { headers: this.headersRequest }),
      );

      this.logger.verbose('[BunkerService.findDataByToken] ++ ', response.data);
      return response?.data;
    } catch (e: any) {
      this.logger.verbose(e);
      throw new HttpException(
        e.response?.data?.message || e?.response?.statusText,
        e.response?.status,
      );
    }
  }

  //TODO: Refactor this method, this method is used by channel service in order-channels microservice
  async encryptData(data: object) {
    try {
      this.logger.verbose(data);
      const url = `${this.baseURL}/v1/user`;
      const myId = uuid();
      const payload = {
        ...data,
        email: myId + '@email.com',
        login: myId,
      };
      const response = await lastValueFrom(
        this.httpService.post<BunkerRegisterResponse>(url, payload, {
          headers: this.headersRequest,
        }),
      );
      return response;
    } catch (error) {
      this.logger.error(
        '[bunker.service] [encryptData] ' + JSON.stringify(error),
      );
      return;
    }
  }

  async updateChannelSettings(token: string, data: object) {
    const url = `${this.baseURL}/v1/user/token/${token}`;
    try {
      const myId = uuid();

      const payload = {
        login: myId,
        email: myId + '@email.com',
        ...data,
      };

      const response = await lastValueFrom(
        this.httpService.put(url, payload, { headers: this.headersRequest }),
      );

      return response?.data;
    } catch (e: any) {
      this.logger.verbose(e);
      throw new HttpException(
        e.response?.data?.message || e?.response?.statusText,
        e.response?.status,
      );
    }
  }

  // get data from dataBunker by email
  async findDataByEmail(email: string) {
    const url = `${this.baseURL}/v1/user/email/${email}`;

    try {
      const response = await lastValueFrom(
        this.httpService.get(url, { headers: this.headersRequest }),
      );
      return response?.data;
    } catch (e: any) {
      this.logger.verbose(e);
      throw new HttpException(
        e.response?.data?.message || e?.response?.statusText,
        e.response?.status,
      );
    }
  }

  async updateDataByToken(token: string, newData: any) {
    const url = `${this.baseURL}/v1/user/token/${token}`;

    try {
      const payload = {
        login: newData.username,
        firstName: newData.firstName,
        lastName: newData.lastName,
        email: newData.email,
        username: newData.username,
      };

      const response = await lastValueFrom(
        this.httpService.put(url, payload, { headers: this.headersRequest }),
      );

      return response?.data;
    } catch (e: any) {
      this.logger.verbose(e);
      throw new HttpException(
        e.response?.data?.message || e?.response?.statusText,
        e.response?.status,
      );
    }
  }

  // //////////////// delete data by token //////////////

  async deleteDataByToken(token: string) {
    const url = `${this.baseURL}/v1/user/token/${token}`;
    try {
      const response = await lastValueFrom(
        this.httpService.delete(url, { headers: this.headersRequest }),
      );
      return response?.data;
    } catch (e: any) {
      this.logger.verbose(e);
      throw new HttpException(
        e.response?.data?.message || e?.response?.statusText,
        e.response?.status,
      );
    }
  }
}
