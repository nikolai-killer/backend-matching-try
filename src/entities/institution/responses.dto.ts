import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsString } from 'class-validator';
import { Type } from 'class-transformer';
import { GetCategoryDto } from '../category/responses.dto';
import { BaseResponseDto } from '../baseResponse.dto';

export class GetInstitutionDto extends BaseResponseDto {
  @ApiProperty({ type: 'string', format: 'uuid' })
  @IsString()
  id: string;

  @ApiProperty({ type: 'string' })
  @IsString()
  name: string;

  @ApiProperty({ type: 'string' })
  @IsString()
  description: string;

  @ApiProperty({ type: GetCategoryDto })
  @IsArray()
  @Type(() => GetCategoryDto)
  categories: GetCategoryDto[];
}

export const serialize = {
  get: GetInstitutionDto,
  create: GetInstitutionDto
};
