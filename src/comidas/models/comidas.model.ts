import { Restaurante } from "src/restaurante/models/restaurante.model";

export class Comida {
    id: number = 0;
    nome: string = '';
    status: boolean = false;
    preco: number = 0;
    descricao: string = '';
    restaurante_id: number = 0;
    restaurante: Restaurante | null = null;

    constructor(partial: Partial<Comida>) {
        Object.assign(this, partial);
    }
}
