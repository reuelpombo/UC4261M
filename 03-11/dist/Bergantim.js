"use strict";
/* ClasseBergantim
O Bergantim é um navio equilibrado, adequado para explorar as éguas e enfrentar outros piratas.

Características:

Capacidade para até 20 tripulantes.
Velocidade alta.
Resistência.
Quantidade distribuída de canhões. */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bergantim = void 0;
const Navio_1 = require("./Navio");
class Bergantim extends Navio_1.Navio {
    constructor() {
        super("Bergantim", 20, 100, 15, "Alta", 20);
    }
    navegar() {
        console.log(`O bergantim ${this.nome} aproveita seus ventos projetados para navegar rapidamente.`);
    }
    atacar() {
        console.log(`O bergantim ${this.nome} realiza uma sequência rápida de disparos.`);
    }
    verificaTripulacao() {
        if (this.maxTripulacao > 20) {
            this.capacidadeTripulacao = 20;
        }
    }
}
exports.Bergantim = Bergantim;
