"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Boleto = void 0;
const Pagamento_1 = require("./Pagamento");
// Subclasse: Boleto 
class Boleto extends Pagamento_1.Pagamento {
    ModeloDePagamento() {
        return "Processo de Pagamento por Boleto : Finalizado "; //
    }
}
exports.Boleto = Boleto;
