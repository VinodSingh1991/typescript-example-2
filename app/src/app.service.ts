import { Injectable } from '@nestjs/common';
import { AuthInfo, PageDataModel } from 'src/util/page.builder';
import { HomePageBuilder } from './controllers/home/home.page.builder';
import { ObjectService } from './controllers/object/object.service';

@Injectable()
export class AppService {
  private repository: HomePageBuilder;
  private objectService: ObjectService;

  constructor() {
    this.repository = new HomePageBuilder();
    this.objectService = new ObjectService();
  }

  async get(): Promise<PageDataModel> {


    const objects = await this.objectService.get();
    const pageModel = this.repository.buildHomePage();

    const pageMetaData = new PageDataModel({
      title: "Home Page",
      content: "Welcome to the Home Page",
      authInfo: new AuthInfo(false),
      metaDescription: "This is the home page of our application.",
      pageType: "home",
      pageModel: pageModel,
      objects: objects
    });

    return pageMetaData;
  }
}
