"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Pagamento_1 = require("./Pagamento");
const Boleto_1 = require("./Boleto");
const CartaoCredito_1 = require("./CartaoCredito");
// Testando polimorfismo
const Cashe = [
    new Pagamento_1.Pagamento(),
    new Boleto_1.Boleto(),
    new CartaoCredito_1.CartaoCredito()
];
Cashe.forEach(Cash => {
    console.log(`Processando pagamento : R$ ${Cash.ModeloDePagamento()}`);
});
