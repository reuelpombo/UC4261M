import { Arma } from './Arma';
export declare class Personagem {
    nome: string;
    vida: number;
    forca: number;
    arma: Arma;
    constructor(nome: string, forca: number, arma: Arma);
    curar(): void;
    perderVida(dano: number): void;
    curarOutroPersonagem(per: Personagem): void;
    atacar(alvo: Personagem): void;
}
//# sourceMappingURL=Personagem.d.ts.map