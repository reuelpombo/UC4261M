import { Pagamento } from "./Pagamento";
import { Boleto } from "./Boleto";
import { CartaoCredito } from "./CartaoCredito";

// Testando polimorfismo
const Cashe: Pagamento[] = [
    new Pagamento(),
    new Boleto(),
    new CartaoCredito()
]; 

Cashe.forEach(Cash => {
    console.log(`Processando pagamento : R$ ${Cash.ModeloDePagamento()}`);
});