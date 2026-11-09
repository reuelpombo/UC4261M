"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guerreiro = void 0;
class Guerreiro {
    constructor(nome) {
        this.nome = nome;
    }
    atacar() {
        return `${this.nome} ataca com espada!`;
    }
}
exports.Guerreiro = Guerreiro;
