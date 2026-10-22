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
    // Método falar: repete o nome algumas vezes
    falar() {
        console.log(`${this.nome} ${this.nome.toLowerCase()}chuuuu!`);
    }
    // Método atacar normal
    atacar(alvo) {
        alvo.vida -= this.ataque;
        if (alvo.vida < 0) {
            alvo.vida = 0;
        }
        console.log(`${this.nome} atacou ${alvo.nome} com um ataque básico, causando ${this.ataque} de dano!`);
    }
    // Método atacar com poder
    atacarComPoder(alvo) {
        alvo.vida -= this.poder.ataque;
        if (alvo.vida < 0) {
            alvo.vida = 0;
        }
        console.log(`${this.nome} usou o poder [${this.poder.nome}] em ${alvo.nome}, causando ${this.poder.ataque} de dano!`);
    }
}
exports.Pokemon = Pokemon;
//# sourceMappingURL=Pokemon.js.map