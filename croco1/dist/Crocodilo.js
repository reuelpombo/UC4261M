"use strict";
// Crie uma classe Crocodilo que herde da classe Reptil.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Crocodilo = void 0;
// A classe Crocodilo deve:
// Possuir um método nadar(), que exiba uma mensagem informando que o crocodilo está nadando.
// Utilizar os atributos e métodos herdados das classes Reptil e Animal.
// Classe base (superclasse)
const Reptil_1 = require("./Reptil");
class Crocodilo extends Reptil_1.Reptil {
    constructor(nome) {
        super(nome);
    }
    nadar() {
        console.log(`${this.nome} está nadando.`);
    }
}
exports.Crocodilo = Crocodilo;
