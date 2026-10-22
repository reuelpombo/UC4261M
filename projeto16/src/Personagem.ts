
import { Arma } from './Arma';

export class Personagem {
    nome: string;
    vida: number = 50;
    forca: number;
    arma: Arma;

    constructor(nome: string, forca: number, arma: Arma) {
        this.nome = nome;
        this.vida = 50;
        this.forca = forca;
        this.arma = arma;
    }

    curar(): void {
        this.vida += 10;
        if (this.vida >= 60) {
            this.vida = 60;
        }
    }

    perderVida(dano: number): void {
        this.vida -= dano;
        if (this.vida < 0) {
            this.vida = 0;
        }
    }

    curarOutroPersonagem(per: Personagem): void { 
        per.vida += 10;
        if (per.vida > 100) { 
            per.vida = 100;
        }
        console.log(`O personagem ${per.nome} foi curado por ${this.nome}`);
    }

    atacar(alvo: Personagem): void {
        alvo.perderVida(this.arma.ataque);
        console.log(`${this.nome} atacou ${alvo.nome} com a arma ${this.arma.nome}, causando ${this.arma.ataque} de dano!`);
        console.log("Vc fez uma Kill ,Vc está Legendary");
        console.log("O inimigo está grandioso godlike");
    }

}