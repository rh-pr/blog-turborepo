import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:3000';
  app.enableCors({
    origin: FRONTEND_URL,
    credentials: true,
  });

  const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 8000;
  await app.listen(port, '0.0.0.0');
  console.log(`Server listening on ${port}`);
}
bootstrap();
