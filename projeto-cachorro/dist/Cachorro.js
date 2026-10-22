"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cachorro = void 0;
class Cachorro {
    // 1. Atributos privados
    _nome;
    _raca;
    _idade;
    // 2. Construtor
    constructor(nome, raca, idade) {
        this._nome = nome;
        this._raca = raca;
        this._idade = idade < 0 ? 0 : idade; // Validação simples para idade não começar negativa
    }
    // 3. Getters e Setters (2 para cada atributo = 6 métodos no total)
    // Getter e Setter para 'nome'
    get nome() {
        return this._nome;
    }
    set nome(novoNome) {
        this._nome = novoNome;
    }
    // Getter e Setter para 'raca'
    get raca() {
        return this._raca;
    }
    set raca(novaRaca) {
        this._raca = novaRaca;
    }
    // Getter e Setter para 'idade'
    get idade() {
        return this._idade;
    }
    set idade(novaIdade) {
        if (novaIdade < 0) {
            console.log("A idade não pode ser negativa!");
        }
        else {
            this._idade = novaIdade;
        }
    }
    // Método extra para demonstrar o comportamento
    latir() {
        console.log(`${this._nome} está latindo: Au Au!`);
    }
}
exports.Cachorro = Cachorro;
//# sourceMappingURL=Cachorro.js.map