import {
  IsBoolean,
  IsDate,
  IsMongoId,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

import { Type } from 'class-transformer';

export class KafkaDto {
  @IsString()
  @IsNotEmpty()
  readonly test: string | undefined;

  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  readonly testNumber: number | undefined;

  @IsBoolean()
  @IsNotEmpty()
  readonly testBoolean: boolean | undefined;

  @IsDate()
  @IsNotEmpty()
  @Type(() => Date)
  readonly testDate: Date | undefined;

  @IsMongoId()
  @IsNotEmpty()
  @Type(() => String)
  readonly testObjectId: string | undefined;
}
