import { Injectable } from '@nestjs/common';
import { Restaurante } from './models/restaurante.model';

@Injectable()
export class RestauranteService {
  private restaurantes: Array<Restaurante> = [
    (new Restaurante({id: 1, nome: 'Italian Food', status: true, avaliacao: 5})),
    (new Restaurante({id: 2, nome: 'Espetos na Grelha', status: true, avaliacao: 3})),
    (new Restaurante({id: 3, nome: 'O Portugues', status: true, avaliacao: 4})),
    (new Restaurante({id: 4, nome: 'Mexicano', status: true, avaliacao: 5})),
    (new Restaurante({id: 5, nome: 'Casa da Vó', status: true, avaliacao: 5})),
  ];

  getRestaurantes(): Array<Restaurante> {
    return this.restaurantes;
  }

  getRestaurante(id: number): Restaurante {
    const restaurante = this.restaurantes.find(restaurante => restaurante.id === id);
  
    if (!restaurante) {
      throw new Error(`Restaurante com ID ${id} não foi encontrado.`);
    }

    return restaurante;
  }
}
