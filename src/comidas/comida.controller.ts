import { Controller, Get, Param, Query } from '@nestjs/common';
import { ComidaService } from './comida.service';
import { Comida } from './models/comidas.model';

@Controller('comida')
export class ComidaController {
    constructor(private readonly comidaService: ComidaService) {}

    @Get()
    findAll(
        @Query('categoria') categoria: string = ''
    ): Array<Comida> {
        this.comidaService.loadVinculoComidaRestaurantes();
        let comidas = this.comidaService.getComidas();

        if (categoria !== '') {
            comidas = comidas.filter((comidas, index) => comidas.restaurante?.categoria === categoria);
        }

        return comidas;
    }

    @Get(':id')
    findById(@Param('id') id: string): Comida {
        this.comidaService.loadVinculoComidaRestaurantes();
        return this.comidaService.getComida(+id);
    }
}
