"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reptil = void 0;
const Animal_1 = require("./Animal");
class Reptil extends Animal_1.Animal {
    constructor(nome, escamas = true) {
        super(nome);
        this.escamas = escamas;
    }
    botarOvo() {
        console.log(`${this.nome} botou um ovo.`);
    }
}
exports.Reptil = Reptil;
