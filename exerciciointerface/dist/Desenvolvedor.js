"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Desenvolvedor = void 0;
class Desenvolvedor {
    constructor(nome) {
        this.nome = nome;
    }
    trabalhar() {
        console.log(`${this.nome} está trabalhando...`);
    }
    programar() {
        console.log(`${this.nome} está programando...`);
    }
}
exports.Desenvolvedor = Desenvolvedor;
