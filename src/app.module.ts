import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RestauranteController } from './restaurante/restaurante.controller';
import { RestauranteService } from './restaurante/restaurante.service';

@Module({
  imports: [],
  controllers: [AppController, RestauranteController],
  providers: [AppService, RestauranteService],
})
export class AppModule {}
