import { Injectable } from '@nestjs/common';
import { CategorySchema } from 'src/db/entity/CategorySchema';
import { CategoryRepository } from 'src/db/repository/categoryRepository';
import { Container } from 'src/di/container';

@Injectable()
export class CategoryService {
  private repository: CategoryRepository;
  constructor() {
    this.repository = Container.get(CategoryRepository);
  }

  async get(): Promise<CategorySchema[]> {
    return await this.repository.findAllRecord();
  }

  async create(data: Partial<CategorySchema>): Promise<CategorySchema> {
    return await this.repository.createRecord(data);
  }

  async getById(categoryId: number): Promise<CategorySchema | null> {
    return await this.repository.findRecordById(categoryId);
  }

  async update(categoryId: number, data: Partial<CategorySchema>): Promise<void> {
    await this.repository.updateRecordById(categoryId, data);
  }

  async delete(categoryId: number): Promise<void> {
    await this.repository.deleteRecordById(categoryId);
  }
}
