import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class RegisterDto {
  @IsNotEmpty()
  @IsString()
  firstName!: string;

  @IsNotEmpty()
  @IsString()
  lastName!: string;

  @IsNotEmpty()
  @IsEmail()
  email!: string;

  @IsNotEmpty()
  phoneNumber!: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  username!: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  password!: string;
}
