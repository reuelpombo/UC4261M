import { Pagamento } from "./Pagamento";


// Subclasse: Boleto 
export class Boleto extends Pagamento {
    public ModeloDePagamento(): string {
        return "Processo de Pagamento por Boleto : Finalizado "; //
    }
}
