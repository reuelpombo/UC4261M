"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ContaBancaria_1 = require("./ContaBancaria");
const conta = new ContaBancaria_1.ContaBancaria(1000);
conta.depositar(50);
conta.consultarSaldo();
// console.log(conta.salario);
