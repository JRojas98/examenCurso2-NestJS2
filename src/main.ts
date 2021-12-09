import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
async function bootstrap() {
  const app =  await NestFactory.create(AppModule);
  app.enableCors();
  const options = new DocumentBuilder()
  .setTitle('api-catalogoAvon')
  .setDescription('api-catalogoAvon')
  .setVersion('1.0')
  .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('main', app, document);
  await app.listen(4000);
}
bootstrap();
