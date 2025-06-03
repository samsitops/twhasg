import axios, { AxiosResponse, RawAxiosRequestHeaders } from 'axios';
import {
  HttpException,
  HttpStatus,
  Injectable,
  Logger as NSLogger,
} from '@nestjs/common';
import { KeycloakResponseUser, KeycloakUser } from '../entities';
import { ConfigService } from '@monorepo/config';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';
import { JwtPayload } from 'jsonwebtoken';
import assert from 'assert';

@Injectable()
export class KeycloakAdminService {
  private readonly logger = new NSLogger(KeycloakAdminService.name);
  private readonly _config = ConfigService.get();
  private _headersRequest: RawAxiosRequestHeaders = {
    'Content-Type': 'application/x-www-form-urlencoded',
  };
  private readonly baseURL: string;
  private readonly clientId: string;
  private readonly clientSecret: string;
  private readonly userClientId: string;
  private readonly userClientSecret: string;
  constructor(private readonly httpService: HttpService) {
    this.baseURL = String(this._config.OIDC.host);
    this.clientId = String(this._config.keycloak.clientId);
    this.clientSecret = String(this._config.keycloak.clientSecret);
    this.userClientId = String(this._config.keycloak.usersClientId);
    this.userClientSecret = String(this._config.keycloak.usersClientSecret);
  }

  async logIn(
    username: string,
    password: string,
  ): Promise<AxiosResponse | string> {
    const url = `${this.baseURL}/realms/${this._config.keycloak.defaultRealm}/protocol/openid-connect/token`;
    console.log('url', url);
    try {
      const payload = {
        grant_type: 'password',
        scope: 'openid profile email',
        client_id: this.userClientId,
        client_secret: this.userClientSecret,
        username: username,
        password: password,
      };

      const response = await lastValueFrom(
        this.httpService.post(url, payload, { headers: this._headersRequest }),
      );

      if (response == null || response.data == null) {
        throw new HttpException(
          'Invalid response from Keycloak',
          HttpStatus.BAD_REQUEST,
        );
      }

      return response?.data;
    } catch (error: any) {
      throw new HttpException(
        error.response.data.error_description || error?.response?.statusText,
        error.response.status,
      );
    }
  }

  async adminLogin(
    username: string,
    password: string,
  ): Promise<AxiosResponse | string> {
    const url = `${this.baseURL}/realms/${this._config.keycloak.adminRealm}/protocol/openid-connect/token`;
    console.log('url', url);
    try {
      const payload = {
        grant_type: 'password',
        scope: 'openid profile email',
        client_id: this._config.keycloak.clientId,
        client_secret: this._config.keycloak.clientSecret,
        username: username,
        password: password,
      };

      const response = await lastValueFrom(
        this.httpService.post(url, payload, { headers: this._headersRequest }),
      );

      if (response == null || response.data == null) {
        throw new HttpException(
          'Invalid response from Keycloak',
          HttpStatus.BAD_REQUEST,
        );
      }

      return response?.data;
    } catch (error: any) {
      throw new HttpException(
        error.response.data.error_description || error?.response?.statusText,
        error.response.status,
      );
    }
  }

  async getAccessToken(): Promise<AxiosResponse | string> {
    const url = `${this.baseURL}/realms/${this._config.keycloak.adminRealm}/protocol/openid-connect/token`;
    const username = this._config.keycloak?.adminUsername;
    const password = this._config.keycloak?.adminPassword;

    try {
      const payload = {
        grant_type: 'password',
        scope: 'openid',
        client_id: this.clientId,
        client_secret: this.clientSecret,
        username: username,
        password: password,
      };

      const response = await lastValueFrom(
        this.httpService.post(url, payload, { headers: this._headersRequest }),
      );

      if (response == null || response.data == null) {
        throw new HttpException(
          'Invalid response from Keycloak',
          HttpStatus.BAD_REQUEST,
        );
      }

      return response?.data.access_token;
    } catch (error: any) {
      throw new HttpException(
        error.response.data.error_description || error?.response?.statusText,
        error.response.status,
      );
    }
  }

  async createUser(user: KeycloakUser): Promise<AxiosResponse | undefined> {
    const access_token = await this.getAccessToken();
    const url = `${this.baseURL}/admin/realms/${this._config.keycloak.defaultRealm}/users`;
    const headers: RawAxiosRequestHeaders = {
      ...this._headersRequest,
      'Content-Type': 'application/json',
      Authorization: `Bearer ${access_token}`,
    };

    try {
      const response = await lastValueFrom(
        this.httpService.post(url, user, { headers }),
      );

      return response.data;
    } catch (error: any) {
      if (error.response?.status === 409) {
        throw new HttpException('User already exists', 409);
      }

      throw new HttpException(
        error.response?.data.error_description || error?.response?.statusText,
        error.response?.status || HttpStatus.BAD_REQUEST,
      );
    }
  }

  async getUserByUserData(
    userData: Partial<KeycloakUser>,
  ): Promise<KeycloakResponseUser | null> {
    const accessToken = await this.getAccessToken();

    const url = `${this.baseURL}/admin/realms/${this._config.keycloak.defaultRealm}/users`;

    const headers: RawAxiosRequestHeaders = {
      ...this._headersRequest,
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    };

    try {
      const response = await lastValueFrom(
        this.httpService.get(url, { params: { ...userData }, headers }),
      );

      return response.data[0] ?? null;
    } catch (error: any) {
      throw new HttpException(
        error.response.data.error_description ||
          error?.response?.statusText ||
          'Failed to fetch user in Keycloak',
        error.response.status,
      );
    }
  }

  async getUsersByAttributes(
    attributes: Partial<object>,
  ): Promise<KeycloakResponseUser[]> {
    this.logger.verbose('[getUserByUserData] User fetched response + ', {
      ...attributes,
    });
    const accessToken = await this.getAccessToken();
    const url = `${this.baseURL}/admin/realms/${this._config.keycloak.defaultRealm}/users`;

    const headers: RawAxiosRequestHeaders = {
      ...this._headersRequest,
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    };
    // Build the query string for attributes
    const query = Object.entries(attributes)
      .filter(([, value]) => value != null && value != undefined)
      .map(([key, value]) => `${key}:${value}`)
      .join(' and ');

    try {
      this.logger.verbose(
        '[getUserByUserData] User fetched response + ' + query,
      );
      const response = await lastValueFrom(
        this.httpService.get(url, { params: { q: query }, headers }),
      );

      return response.data;
    } catch (error: any) {
      throw new HttpException(
        error.response.data.error_description ||
          error?.response?.statusText ||
          'Failed to fetch user in Keycloak',
        error.response.status,
      );
    }
  }

  async getUserByUserId(userId: string): Promise<KeycloakResponseUser | null> {
    const accessToken = await this.getAccessToken();

    const url = `${this.baseURL}/admin/realms/${
      this._config.keycloak.defaultRealm
    }/users/${encodeURIComponent(userId)}`;

    const headers: RawAxiosRequestHeaders = {
      ...this._headersRequest,
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    };

    try {
      this.logger.verbose('[getUserByUserData] User fetched response + ');
      const response = await lastValueFrom(
        this.httpService.get(url, { headers }),
      );

      this.logger.verbose(
        '[getUserByUserData] User fetched response + ' +
          JSON.stringify(response.data),
      );

      return response.data ?? null;
    } catch (error: any) {
      throw new HttpException(
        error.response.data.error_description ||
          error?.response?.statusText ||
          'Failed to fetch user in Keycloak',
        error.response.status,
      );
    }
  }

  async getAllUsers(): Promise<KeycloakResponseUser[] | any[]> {
    const accessToken = await this.getAccessToken();
    const url = `${this.baseURL}/admin/realms/${this._config.keycloak.defaultRealm}/users`;

    const headers: RawAxiosRequestHeaders = {
      ...this._headersRequest,
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    };

    try {
      this.logger.verbose('[getUserByUserData] User fetched response + ');
      const response = await lastValueFrom(
        this.httpService.get(url, {
          headers: headers,
        }),
      );

      return response.data ?? null;
    } catch (error: any) {
      throw new HttpException(
        error.response.data.error_description ||
          error?.response?.statusText ||
          'Failed to fetch user in Keycloak',
        error.response.status,
      );
    }
  }
  async verifyPhone(user: JwtPayload): Promise<string> {
    const token = await this.getAccessToken();
    try {
      await axios.put(
        `${this.baseURL}/admin/realms/users/users/${user.sub}`,
        {
          firstName: user['given_name'],
          lastName: user['family_name'],
          email: user['email'],
          attributes: {
            phone: user['phone'],
            phone_number_verified: true,
            picture: user['picture'],
          },
        },
        { headers: { Authorization: `Bearer ${token}` } },
      );
      return 'User updated successfully';
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        // Handle Axios-specific errors
        throw new HttpException(
          error.response?.data || 'Failed to fetch user',
          error.response?.status || HttpStatus.BAD_REQUEST,
        );
      }

      // Handle unexpected errors
      throw new HttpException(
        'An Error Accured while fetching user',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
  async verifyEmail(
    updateData: Partial<KeycloakUser> | JwtPayload,
  ): Promise<string> {
    const token = await this.getAccessToken();
    try {
      await axios.put(
        `${this.baseURL}/admin/realms/users/users/${updateData.sub}`,
        { emailVerified: true },
        { headers: { Authorization: `Bearer ${token}` } },
      );

      return 'User updated successfully';
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        // Handle Axios-specific errors
        throw new HttpException(
          error.response?.data || 'Failed to fetch user',
          error.response?.status || HttpStatus.BAD_REQUEST,
        );
      }

      // Handle unexpected errors
      throw new HttpException(
        'An Error Accured while fetching user',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async getUserByEmail(email: string): Promise<KeycloakUser> {
    const token = await this.getAccessToken();

    try {
      const response = await axios.get(
        `${this.baseURL}/admin/realms/users/users`,
        {
          headers: { Authorization: `Bearer ${token}` },
          params: { email }, // Query parameter for filtering users by email
        },
      );

      if (!response.data.length) {
        throw new HttpException('User not found', HttpStatus.NOT_FOUND);
      }

      return response.data[0]; // Keycloak returns an array, get the first match
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        // Handle Axios-specific errors
        throw new HttpException(
          error.response?.data || 'Failed to fetch user',
          error.response?.status || HttpStatus.BAD_REQUEST,
        );
      }

      // Handle unexpected errors
      throw new HttpException(
        'An Error Accured while fetching user',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
  async axiosUpdateUser(
    user: JwtPayload,
    updatedData: Partial<KeycloakUser>,
  ): Promise<string> {
    const token = await this.getAccessToken();
    try {
      await axios.put(
        `${this.baseURL}/admin/realms/users/users/${user.sub}`,
        {
          firstName: user['given_name'],
          lastName: user['family_name'],
          email: user['email'],
          attributes: updatedData,
        },
        { headers: { Authorization: `Bearer ${token}` } },
      );
      return 'User updated successfully';
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        // Handle Axios-specific errors
        throw new HttpException(
          error.response?.data || 'Failed to fetch user',
          error.response?.status || HttpStatus.BAD_REQUEST,
        );
      }

      // Handle unexpected errors
      throw new HttpException(
        'An Error Accured while fetching user',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async updateUser(userData: Partial<KeycloakUser>): Promise<AxiosResponse> {
    try {
      const keycloakUserDetails: Partial<KeycloakResponseUser> | null =
        userData.id != undefined && userData.id != null
          ? userData
          : await this.getUserByUserData({
              email: userData.email,
            });

      if (!keycloakUserDetails) {
        throw new HttpException('User not found', 404);
      }
      const accessToken = await this.getAccessToken();
      const updatingUrl = `${this.baseURL}/admin/realms/${this._config.keycloak.defaultRealm}/users/${keycloakUserDetails.id}`;

      const headers: RawAxiosRequestHeaders = {
        ...this._headersRequest,
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      };

      const payload = {
        email: userData.email,
        firstName: userData.firstName,
        lastName: userData.lastName,
        attributes: {
          phone: userData.phone,
          picture: userData.attributes?.picture,
        },
      };

      const response = await lastValueFrom(
        this.httpService.put(updatingUrl, payload, { headers }),
      );

      return response.data;
    } catch (error: any) {
      throw new HttpException(
        error.response.data.error_description ||
          error?.response?.statusText ||
          'Failed to update user in Keycloak',
        error.response.status,
      );
    }
  }
}
