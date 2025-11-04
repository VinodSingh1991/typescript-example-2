import { Injectable } from '@nestjs/common';
import { ObjectSchema } from 'src/db/entity/ObjectSchema';
import { ObjectRepository } from 'src/db/repository/objectRepository';
import { Container } from 'src/di/container';

@Injectable()
export class ObjectService {
  private repository: ObjectRepository;
  constructor() {
    this.repository = Container.get(ObjectRepository);
  }

  async get(): Promise<ObjectSchema[]> {
    return await this.repository.findAllRecord();
  }

  async getById(objectId: string): Promise<ObjectSchema | null> {
    return await this.repository.findRecordById(objectId);
  }
}
