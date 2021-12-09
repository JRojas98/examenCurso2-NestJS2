import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmConfig } from './config/typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatalogoAvonRepository } from './repositorys/CatalogoAvon.repository';
@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    TypeOrmModule.forFeature([CatalogoAvonRepository])

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
