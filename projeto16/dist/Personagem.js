"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personagem = void 0;
class Personagem {
    nome;
    vida = 50;
    forca;
    arma;
    constructor(nome, forca, arma) {
        this.nome = nome;
        this.vida = 50;
        this.forca = forca;
        this.arma = arma;
    }
    curar() {
        this.vida += 10;
        if (this.vida >= 60) {
            this.vida = 60;
        }
    }
    perderVida(dano) {
        this.vida -= dano;
        if (this.vida < 0) {
            this.vida = 0;
        }
    }
    curarOutroPersonagem(per) {
        per.vida += 10;
        if (per.vida > 100) {
            per.vida = 100;
        }
        console.log(`O personagem ${per.nome} foi curado por ${this.nome}`);
    }
    atacar(alvo) {
        alvo.perderVida(this.arma.ataque);
        console.log(`${this.nome} atacou ${alvo.nome} com a arma ${this.arma.nome}, causando ${this.arma.ataque} de dano!`);
        console.log("Vc fez uma Kill ,Vc está Legendary");
        console.log("O inimigo está grandioso godlike");
    }
}
exports.Personagem = Personagem;
//# sourceMappingURL=Personagem.js.map