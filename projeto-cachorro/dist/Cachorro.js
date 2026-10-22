"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cachorro = void 0;
class Cachorro {
    nome;
    raca;
    peso;
    constructor(nome, raca, peso) {
        this.nome = nome;
        this.raca = raca;
        this.peso = peso;
    }
    getNome() {
        return this.nome;
    }
    setNome(novoNome) {
        this.nome = novoNome;
    }
    getraca() {
        return this.raca;
    }
    setraca(novoRaca) {
        this.raca = novoRaca;
    }
    getPeso() {
        return this.peso;
    }
    setPeso(novoPeso) {
        this.peso = novoPeso;
    }
}
exports.Cachorro = Cachorro;
//# sourceMappingURL=Cachorro.js.map