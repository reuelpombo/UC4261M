"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pokemon = void 0;
class Pokemon {
    nome;
    vida;
    ataque;
    poder;
    constructor(nome, vida, ataque, poder) {
        this.nome = nome;
        this.vida = vida;
        this.ataque = ataque;
        this.poder = poder;
    }
    falar() {
        console.log(`${this.nome} `.repeat(3));
    }
    atacar(alvo) {
        if (alvo.vida > 0) {
            alvo.vida -= this.ataque;
            console.log(`${this.nome} atacou ${alvo.nome} e causou ${this.ataque} de dano!`);
        }
        else {
            console.log(`${alvo.nome} já está derrotado!`);
        }
    }
    atacarComPoder(alvo) {
        if (alvo.vida > 0) {
            alvo.vida -= this.poder.ataque;
            console.log(`${this.nome} usou o poder ${this.poder.nome} em ${alvo.nome}, causando ${this.poder.ataque} de dano!`);
        }
        else {
            console.log(`${alvo.nome} já está derrotado!`);
        }
    }
}
exports.Pokemon = Pokemon;
//# sourceMappingURL=Pokemon.js.map