"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guardiao = void 0;
const Personagem_1 = require("./Personagem");
class Guardiao extends Personagem_1.Personagem {
    constructor(nome, vida, ataque, defesa) {
        super(nome, vida, vida, ataque, defesa);
        this.protecaoDivina = true;
    }
    curarAliado(alvo) {
        console.log(`${this.nome} levanta o Escudo do Rancho e cura ${alvo.getNome()}!`);
        alvo.curar(25);
    }
    equiparItem(item) {
        console.log(`${this.nome} equipou o baluarte: ${item}.`);
        this.defesa += 8;
    }
    atacar(alvo) {
        if (!this.estaVivo()) {
            console.log(`${this.nome} está derrotado e não pode atacar!`);
            return;
        }
        console.log(`${this.nome} avança com o Escudo do Rancho esmagando ${alvo.getNome()}!`);
        alvo.receberDano(this.ataque);
    }
}
exports.Guardiao = Guardiao;
