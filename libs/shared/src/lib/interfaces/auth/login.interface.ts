export interface LoginResponse {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  refresh_expires_in: number;
  token_type: number;
}

export interface LoginRequest {
  data: {
    username: string;
    password: string;
  };
  realm: string;
}
