"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaBancaria = void 0;
class ContaBancaria {
    constructor(saldoInicial) {
        this.saldo = saldoInicial;
    }
    consultarSaldo() {
        console.log(`Saldo: R$ ${this.saldo}`);
    }
    depositar(valor) {
        if (valor > 0) {
            this.saldo += valor;
        }
    }
}
exports.ContaBancaria = ContaBancaria;
