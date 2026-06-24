import { Injectable } from '@nestjs/common';
import { Comida } from './models/comidas.model';
import { RestauranteService } from 'src/restaurante/restaurante.service';

@Injectable()
export class ComidaService {
  constructor(private readonly restauranteService: RestauranteService) {}

  private comidas: Array<Comida> = [
    (new Comida({id: 1, nome: 'spaghetti', status: true, preco: 30, descricao: 'macarrao spaghetti com molho bolonhesa', restaurante_id: 1})),
    (new Comida({id: 2, nome: 'feijoada', status: true, preco: 35, descricao: 'feijoada acompanha arroz, couve e farofa', restaurante_id: 5})),
  ];

  getComidas(): Array<Comida> {
    return this.comidas;
  }

  getComida(id: number): Comida {
    const comida = this.comidas.find(comida => comida.id === id);
  
    if (!comida) {
      throw new Error(`Comida com ID ${id} não foi encontrado.`);
    }

    return comida;
  }

  loadVinculoComidaRestaurantes()
  {
    this.comidas.forEach(comida => {
      comida.restaurante = this.restauranteService.getRestaurante(comida.restaurante_id);
    });
  }
}
