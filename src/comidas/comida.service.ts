import { Injectable } from '@nestjs/common';
import { Comida } from './models/comidas.model';
import { RestauranteService } from 'src/restaurante/restaurante.service';

@Injectable()
export class ComidaService {
  constructor(private readonly restauranteService: RestauranteService) {}

  private comidas: Array<Comida> = [
    (new Comida({id: 1, nome: 'Spaghetti', status: true, preco: 30, descricao: 'macarrao spaghetti com molho bolonhesa', restaurante_id: 1})),
    (new Comida({id: 2, nome: 'Feijoada', status: true, preco: 35, descricao: 'feijoada acompanha arroz, couve e farofa', restaurante_id: 5})),
    (new Comida({id: 3, nome: 'Gnocci', status: true, preco: 45, descricao: 'Gnocci com molho bolonhesa', restaurante_id: 1})),
    (new Comida({id: 4, nome: 'Espeto de Carne', status: true, preco: 15, descricao: 'Espeto feito com alcatra', restaurante_id: 2})),
    (new Comida({id: 5, nome: 'Risoto de Palmito', status: true, preco: 60, descricao: 'Risoto de palmito com queijo', restaurante_id: 3})),
    (new Comida({id: 6, nome: 'Taco', status: true, preco: 40, descricao: 'Tortilha fina de milho, recheada com carne, feijão e molho', restaurante_id: 4})),
    (new Comida({id: 7, nome: 'Parmegiana de carne', status: true, preco: 68, descricao: 'Parmegiana de carne, acompanha arroz e fritas', restaurante_id: 6})),
    (new Comida({id: 8, nome: 'Espeto de coração', status: true, preco: 15, descricao: 'Espeto de coração de galinha', restaurante_id: 2})),
  ]

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
