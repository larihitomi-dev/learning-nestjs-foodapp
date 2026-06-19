export class Restaurante {
    id: number = 0;
    nome: string = '';
    status: boolean = false;
    avaliacao: number = 0;

    constructor(partial: Partial<Restaurante>) {
        Object.assign(this, partial);
    }
}
