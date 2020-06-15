import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { CategoryEntity } from './category.entity';

export class CreateCategoryDto {
  @ApiProperty({ type: 'string' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ type: 'string' })
  @IsNotEmpty()
  @IsString()
  description: string;

  public static toEntity(dto: CreateCategoryDto): CategoryEntity{
    const cat = new CategoryEntity();
    cat.name = dto.name;
    cat.description = dto.description;
    return cat;
  }
}

export const dto = {
  create: CreateCategoryDto
};
