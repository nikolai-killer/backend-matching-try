import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryEntity } from '../entities/category/category.entity';
import { CreateCategoryDto } from '../entities/category/requests.dto';
import { GetCategoryDto } from '../entities/category/responses.dto';

@Controller('category')
export class CategoryController {
  constructor(private serv: CategoryService) {
  }

  @Get()
  public async getAll(): Promise<CategoryEntity[]>{
    return await this.serv.getAll();
  }

  @Post()
  public async createCategory(@Body() categoryDto: CreateCategoryDto): Promise<GetCategoryDto>{
    return this.serv.createCategory(categoryDto);
  }
}
