import "reflect-metadata"
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { GlobalFilters } from './global_fileters';

async function bootstrap() {

  console.clear();
  
  
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 2999);

  app.useGlobalFilters(new GlobalFilters());

  app.enableCors({
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
  })

}
void bootstrap();
