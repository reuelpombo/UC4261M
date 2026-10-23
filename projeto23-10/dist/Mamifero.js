"use strict";
// essa classe vai ser a classe PAI main 
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mamifero = void 0;
class Mamifero {
    nome;
    patas; // atributos
    pelo;
    constructor(nome, patas, pelo) {
        this.nome = nome;
        this.patas = patas; //construtor
        this.pelo = pelo;
    }
    fazerSom() {
        console.log(`${this.nome} está fazendo um barulho.`);
    }
    getNome() {
        return this.nome;
    }
    setNome(novoNome) {
        ;
        this.nome = novoNome;
    }
}
exports.Mamifero = Mamifero;
//# sourceMappingURL=Mamifero.js.map