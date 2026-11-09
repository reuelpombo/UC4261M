"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gerente = void 0;
class Gerente {
    constructor(nome) {
        this.nome = nome;
    }
    trabalhar() {
        console.log(`${this.nome} está trabalhando...`);
    }
    gerenciarEquipes() {
        console.log(`${this.nome} está gerenciando equipes...`);
    }
}
exports.Gerente = Gerente;
