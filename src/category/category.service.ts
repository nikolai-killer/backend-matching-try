import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryEntity } from '../entities/category/category.entity';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from '../entities/category/requests.dto';
import { GetCategoryDto } from '../entities/category/responses.dto';

@Injectable()
export class CategoryService {
  constructor(@InjectRepository(CategoryEntity) private rep: Repository<CategoryEntity> ) {
  }

  async getAll(): Promise<CategoryEntity[]>{
    return await this.rep.find();
  }

  async createCategory(createCategoryDto: CreateCategoryDto): Promise<GetCategoryDto> {
    return this.rep.save(CreateCategoryDto.toEntity(createCategoryDto))
      .then(e => GetCategoryDto.toDto(e));
  }
}
