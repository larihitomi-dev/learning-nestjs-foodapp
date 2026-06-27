import { Controller, Get, Param } from '@nestjs/common';
import { RestauranteService } from '../restaurante/restaurante.service';

@Controller('categoria')
export class CategoriaController {
    constructor(private readonly restauranteService: RestauranteService) {}

    @Get()
    findAll(): Array<string> {
        const restaurantes = this.restauranteService.getRestaurantes();
        let categorias = restaurantes.map(restaurante => restaurante.categoria);

        return categorias.filter((categoria, index) => categorias.indexOf(categoria) === index);
    }
}
