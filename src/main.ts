import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //todo: change for deployment
  app.enableCors({
    origin: 'http://localhost:3000', // ✅ allow your frontend
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true, // if you need cookies
  });
  app.useGlobalPipes(new ValidationPipe())
  await app.listen(process.env.PORT ?? 8000);
}
bootstrap();
