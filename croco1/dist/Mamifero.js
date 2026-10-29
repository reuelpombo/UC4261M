"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mamifero = void 0;
const Animal_1 = require("./Animal");
class Mamifero extends Animal_1.Animal {
    constructor(nome, pelo = true) {
        super(nome);
        this.pelo = pelo;
    }
    amamentar() {
        console.log(`${this.nome} está amamentando.`);
    }
}
exports.Mamifero = Mamifero;
