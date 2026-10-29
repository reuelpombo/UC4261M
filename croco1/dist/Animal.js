"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
class Animal {
    constructor(nome) {
        this.nome = nome;
    }
    mover() {
        console.log(`${this.nome} está se movendo.`);
    }
}
exports.Animal = Animal;
