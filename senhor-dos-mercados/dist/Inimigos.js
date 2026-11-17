"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BalrogDoBoleto = exports.OperadorDeOfertas = exports.FiscalDePrecos = void 0;
const Personagem_1 = require("./Personagem");
class FiscalDePrecos extends Personagem_1.Personagem {
    constructor() {
        super("Fiscal de Preços (Rede Alfa)", 60, 60, 12, 4);
    }
}
exports.FiscalDePrecos = FiscalDePrecos;
class OperadorDeOfertas extends Personagem_1.Personagem {
    constructor() {
        super("Operador de Ofertas (Rede Ômega)", 80, 80, 15, 6);
    }
}
exports.OperadorDeOfertas = OperadorDeOfertas;
class BalrogDoBoleto extends Personagem_1.Personagem {
    constructor() {
        super("Balrog do Boleto (Chefe Final)", 150, 150, 22, 10);
    }
    atacar(alvo) {
        console.log(` ${this.nome} ruge: "VOCÊ NÃO VAI PARCELAR!" e desfere um golpe devastador!`);
        alvo.receberDano(this.ataque);
    }
}
exports.BalrogDoBoleto = BalrogDoBoleto;
