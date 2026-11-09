"use strict";
/* A chalupa é uma embarcação pequena, ágil e ideal para explorar ilhas, fugir de inimigos e transportar pequenas tripulações.

Características:

Capacidade para até 10 tripulantes.
Velocidade muito alta.
Resistência baixa.
Poucos canhões. */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chalupa = void 0;
const Navio_1 = require("./Navio");
class Chalupa extends Navio_1.Navio {
    constructor() {
        super("Chalupa", 10, 50, 4, "Muito Alta", 5);
    }
    navegar() {
        console.log("A chalupa utiliza sua agilidade para realizar manobras rápidas.");
    }
    atacar() {
        console.log("A chalupa dispara seus poucos canhões e tenta escapar rapidamente.");
    }
    explorarIlha() {
        console.log("Uma tripulação está explorando uma ilha em busca de tesouros.");
    }
}
exports.Chalupa = Chalupa;
