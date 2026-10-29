"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Veiculo_1 = require("./Veiculo");
const Carro_1 = require("./Carro");
const Bike_1 = require("./Bike");
// Testando polimorfismo ARRAY
const Movimento = [
    new Veiculo_1.Veiculo(),
    new Carro_1.Carro(),
    new Bike_1.Bike()
];
Movimento.forEach(Movi => {
    console.log(`seu movimento está a km por hora: ${Movi.Movimentacao()}`);
});
