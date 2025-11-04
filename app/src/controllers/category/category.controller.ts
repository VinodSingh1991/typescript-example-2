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
  async getById(@Param("id") id: number): Promise<CategorySchema | null> {
    return await this.service.getById(id);
  }

  @Post("/")
  async create(@Body() data: Partial<CategorySchema>): Promise<CategorySchema> {
    return await this.service.create(data);
  }

  @Put("/:id")
  async update(@Param("id") id: number, @Body() data: Partial<CategorySchema>): Promise<void> {
    await this.service.update(id, data);
  }

  @Delete("/:id")
  async delete(@Param("id") id: number): Promise<void> {
    await this.service.delete(id);
  }

}
