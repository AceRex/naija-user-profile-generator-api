import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen("https://naija-user-profile-generator-api.github.io/");
}
bootstrap();
