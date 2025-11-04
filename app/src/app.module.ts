import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ObjectModule } from './controllers/object/object.module';
import { CategoryModule } from './controllers/category/category.module';

@Module({
  imports: [
    ObjectModule,
    CategoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
