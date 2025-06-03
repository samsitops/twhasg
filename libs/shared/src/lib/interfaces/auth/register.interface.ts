export interface RegisterRequest {
  data: {
    firstName: string;
    lastName: string;
    email: string;
    username: string;
    password: string;
    ip: string;
  };
  realm: string;
}

export interface RegisterResponse {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  id: string;
}
