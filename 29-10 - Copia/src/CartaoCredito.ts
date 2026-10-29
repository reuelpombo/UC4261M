import { Pagamento } from "./Pagamento";


// Subclasse: cartao credito 
export class CartaoCredito extends Pagamento {
    public ModeloDePagamento (): string {
       return "Processo de Pagamento por Cartão de credito : Finalizado ";
    }
}