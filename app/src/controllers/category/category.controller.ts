import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategorySchema } from 'src/db/entity/CategorySchema';

@Controller("categories")
export class CategoryController {
  constructor(private readonly service: CategoryService) { }

  @Get("/")
  async get(): Promise<CategorySchema[]> {
    return await this.service.get();
  }

  @Get("/:id")
  async getById(@Param("id") id: string): Promise<CategorySchema | null> {
    return await this.service.getById(id);
  }
}
