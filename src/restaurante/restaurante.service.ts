import { Injectable } from '@nestjs/common';
import { Restaurante } from './models/restaurante.model';

@Injectable()
export class RestauranteService {
  private restaurantes: Array<Restaurante> = [
    (new Restaurante({id: 1, nome: 'Italian Food', status: true, avaliacao: 5, categoria: 'comida italiana'})),
    (new Restaurante({id: 2, nome: 'Espetos na Grelha', status: true, avaliacao: 3, categoria: 'churrasco'})),
    (new Restaurante({id: 3, nome: 'O Portugues', status: true, avaliacao: 4, categoria: 'comida portuguesa'})),
    (new Restaurante({id: 4, nome: 'Mexicano', status: true, avaliacao: 5, categoria: 'comida mexicana'})),
    (new Restaurante({id: 5, nome: 'Casa da Vó', status: true, avaliacao: 5, categoria: 'comida brasileira'})),
    (new Restaurante({id: 6, nome: 'Vero Italia', status: true, avaliacao: 4.7, categoria: 'comida italiana'})),
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
