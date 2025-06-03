export interface IUser {
  id: string;
  uuid: string;
  username: string;
  email?: string;
  password?: string;
  mobile?: string;
  isVerified?: boolean;
  img?: string;
  role?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
