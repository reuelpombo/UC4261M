"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// crie a classe carro e siga as instruções para criala usando de exemplo a classe Cachorro
// o carro deve ter marca, tipo, ano 
// oque o carro faz ele acelera, freia, buzina
// depois crie a classe crie 3 carros diferentes no 'index.ts' chame seus atributos em console.log e chame seus metodos.
class Carro {
    marca;
    tipo;
    ano;
    constructor(marca, tipo, ano) {
        this.marca = marca;
        this.tipo = tipo;
        this.ano = ano;
    }
    acelerar() {
        console.log(`${this.marca} está acelerando.`);
    }
    frear() {
        console.log(`${this.marca} está freando.`);
    }
    buzinar() {
        console.log(`${this.marca} está buzinando.`);
    }
}
//# sourceMappingURL=Carros.js.map