"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personagem = void 0;
class Personagem {
    // Atributos privados
    _nome;
    _vida;
    _dinheiro;
    constructor(nome, vida, dinheiro) {
        this._nome = nome;
        // Garantimos que a vida inicial não comece negativa
        this._vida = vida < 0 ? 0 : vida;
        // Garantimos que o dinheiro não comece negativo
        this._dinheiro = dinheiro < 0 ? 0 : dinheiro;
    }
    // Método para mostrar a vida atual
    mostrarVida() {
        console.log(`A vida atual de ${this._nome} é: ${this._vida}`);
    }
    // Método para modificar a vida (com validação para não ficar negativa)
    mudarVida(novaVida) {
        if (novaVida < 0) {
            this._vida = 0;
            console.log(`A vida de ${this._nome} caiu para 0 (não pode ficar negativa).`);
        }
        else {
            this._vida = novaVida;
            console.log(`A vida de ${this._nome} foi alterada para ${this._vida}.`);
        }
    }
    // Getters e Setters caso queira acessar os outros atributos com segurança
    get nome() {
        return this._nome;
    }
    get dinheiro() {
        return this._dinheiro;
    }
    set dinheiro(novoValor) {
        if (novoValor < 0) {
            console.log("O dinheiro não pode ser negativo!");
        }
        else {
            this._dinheiro = novoValor;
        }
    }
}
exports.Personagem = Personagem;
//# sourceMappingURL=Personagem.js.map