"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Arqueiro = void 0;
const Personagem_1 = require("./Personagem");
class Arqueiro extends Personagem_1.Personagem {
    constructor(nome, vida, ataque, defesa, agilidade) {
        super(nome, vida, vida, ataque, defesa);
        this.agilidade = agilidade;
    }
    usarHabilidadeEspecial(alvo) {
        if (!this.estaVivo()) {
            console.log(`${this.nome} está derrotado e não pode usar habilidades!`);
            return;
        }
        console.log(`${this.nome} dispara uma Chuva de Flechas Élficas em ${alvo.getNome()}!`);
        alvo.receberDano(this.ataque * 1.5);
    }
    atacar(alvo) {
        if (!this.estaVivo()) {
            console.log(`${this.nome} está derrotado e não pode atacar!`);
            return;
        }
        console.log(`${this.nome} dispara uma flecha precisa com suas Baguetes Élficas em ${alvo.getNome()}!`);
        alvo.receberDano(this.ataque);
    }
}
exports.Arqueiro = Arqueiro;
