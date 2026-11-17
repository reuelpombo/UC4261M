"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guerreiro = void 0;
const Personagem_1 = require("./Personagem");
class Guerreiro extends Personagem_1.Personagem {
    constructor(nome, vida, ataque, defesa, armaduraExtra) {
        super(nome, vida, vida, ataque, defesa);
        this.armaduraExtra = armaduraExtra;
    }
    equiparItem(item) {
        console.log(`${this.nome} equipou a pesada armadura/item: ${item}! Defesa aumentada.`);
        this.defesa += 5;
    }
    atacar(alvo) {
        if (!this.estaVivo()) {
            console.log(`${this.nome} está derrotado e não pode atacar!`);
            return;
        }
        console.log(`${this.nome} desempanha o Facão de Cortar Salame e desfere um golpe brutal em ${alvo.getNome()}!`);
        const danoTotal = this.ataque + 10;
        alvo.receberDano(danoTotal);
    }
}
exports.Guerreiro = Guerreiro;
