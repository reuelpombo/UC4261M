"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mago = void 0;
class Mago {
    constructor(nome) {
        this.nome = nome;
    }
    lancarMagia() {
        return `${this.nome} lança uma Magia poderosa!`;
    }
}
exports.Mago = Mago;
