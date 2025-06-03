export interface RefreshTokenRequest {
  data: {
    refreshToken: string;
  };
  realm: string;
}

export interface RefreshTokenResponse {
  access_token: string;
  refresh_token: string;
}

export interface LogoutRequest {
  data: {
    token: string;
  };
  realm: string;
}

export interface LogoutResponse {
  message: string;
}
