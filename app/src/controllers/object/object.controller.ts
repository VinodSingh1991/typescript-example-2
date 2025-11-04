import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ObjectService } from './object.service';
import { ObjectSchema } from 'src/db/entity/ObjectSchema';

@Controller("objects")
export class ObjectController {
  constructor(private readonly service: ObjectService) { }

  @Get("/")
  async get(): Promise<ObjectSchema[]> {
    return await this.service.get();
  }

  @Get("/:id")
  async getById(@Param("id") id: string): Promise<ObjectSchema | null> {
    return await this.service.getById(id);
  }

}
