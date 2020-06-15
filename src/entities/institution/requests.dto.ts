import { IsArray, IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { GetCategoryDto } from '../category/responses.dto';
import { Type } from 'class-transformer';

export class CreateInstitutionDto {
  @ApiProperty({ type: 'string' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ type: 'string' })
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty({ type: GetCategoryDto })
  @IsNotEmpty()
  @IsArray()
  @Type(() => GetCategoryDto)
  categories: GetCategoryDto[];
}

export const dto = {
  create: CreateInstitutionDto
};
