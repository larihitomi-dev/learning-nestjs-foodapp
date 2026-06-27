import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RestauranteController } from './restaurante/restaurante.controller';
import { RestauranteService } from './restaurante/restaurante.service';
import { ComidaController } from './comidas/comida.controller';
import { ComidaService } from './comidas/comida.service';
import { CategoriaController } from './categoria/categoria.controller';

@Module({
  imports: [],
  controllers: [AppController, RestauranteController, ComidaController, CategoriaController],
  providers: [AppService, RestauranteService, ComidaService],
})
export class AppModule {}
