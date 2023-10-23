import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsBoolean,
  IsDateString,
  IsInt,
  IsNumberString,
  IsOptional,
  IsString,
  isString,
} from 'class-validator';

export class ClientDto {
  @ApiProperty()
  @IsInt()
  @IsOptional()
  id: number;

  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  phone: string;

  @ApiProperty()
  @IsString()
  address: string;

  @ApiProperty()
  @IsString()
  neighborhood: string;

  @ApiProperty()
  @IsInt()
  @IsOptional()
  number: number;

  @ApiProperty()
  @IsString()
  @IsOptional()
  complement: string;

  @ApiProperty()
  @IsInt()
  zipcode: number;
}
