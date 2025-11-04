import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { PageDataModel } from './util/page.builder';
import { ObjectService } from './controllers/object/object.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get("/")
  async getHome(): Promise<PageDataModel> {
    return this.appService.get();
  }

}
