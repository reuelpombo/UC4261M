"use strict";
/* O galeão é uma embarcação enorme, resistente e fortemente armada, ideal para batalhas navais de grande escala.

Características:

Capacidade para até 50 tripulantes.
Velocidade baixa.
Resistência alta.
Grande quantidade de canhões. */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Galeao = void 0;
const Navio_1 = require("./Navio");
class Galeao extends Navio_1.Navio {
    constructor() {
        super("Galeão", 50, 200, 30, "Baixa", 40);
    }
    navegar() {
        console.log("O galeão avança lentamente pelo mar.");
    }
    atacar() {
        console.log("O galeão dispara uma poderosa salva de canhões.");
    }
    repararNavio(quantidade) {
        if (quantidade < 0) {
            console.log("Erro: A quantidade de reparo não pode ser negativa!");
            return;
        }
        this.vidaAtual += quantidade;
        if (this.vidaAtual > this.vidaMaxima) {
            this.vidaAtual = this.vidaMaxima;
        }
        console.log(`O galeão foi reparado. Vida atual: ${this.vidaAtual}/${this.vidaMaxima}`);
    }
}
exports.Galeao = Galeao;
