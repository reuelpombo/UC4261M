"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartaoCredito = void 0;
const Pagamento_1 = require("./Pagamento");
// Subclasse: cartao credito 
class CartaoCredito extends Pagamento_1.Pagamento {
    ModeloDePagamento() {
        return "Processo de Pagamento por Cartão de credito : Finalizado ";
    }
}
exports.CartaoCredito = CartaoCredito;
