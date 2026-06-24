import { Controller, Get, Param } from '@nestjs/common';
import { ComidaService } from './comida.service';
import { Comida } from './models/comidas.model';

@Controller('comida')
export class ComidaController {
    constructor(private readonly comidaService: ComidaService) {}

    @Get()
    findAll(): Array<Comida> {
        this.comidaService.loadVinculoComidaRestaurantes();
        return this.comidaService.getComidas();
    }

    @Get(':id')
    findById(@Param('id') id: string): Comida {
        this.comidaService.loadVinculoComidaRestaurantes();
        return this.comidaService.getComida(+id);
    }
}
