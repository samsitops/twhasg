import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class LoginDto {
  @ApiProperty({
    uniqueItems: true,
    example: 'username 1',
    minimum: 8,
  })
  @IsNotEmpty({
    message: 'Username is required',
  })
  username!: string;

  @ApiProperty({
    uniqueItems: true,
    example: '********',
    minimum: 8,
    maximum: 20,
  })
  @IsNotEmpty({
    message: 'Password is required',
  })
  password!: string;
}
