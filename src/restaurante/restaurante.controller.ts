import { Controller, Get, Param } from '@nestjs/common';
import { RestauranteService } from './restaurante.service';
import { Restaurante } from './models/restaurante.model';

@Controller('restaurante')
export class RestauranteController {
    constructor(private readonly restauranteService: RestauranteService) {}

    @Get()
    findAll(): Array<Restaurante> {
        return this.restauranteService.getRestaurantes();
    }

    @Get(':id')
    findById(@Param('id') id: string): Restaurante {
        return this.restauranteService.getRestaurante(+id);
    }
}
