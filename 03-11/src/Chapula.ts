/* A chalupa é uma embarcação pequena, ágil e ideal para explorar ilhas, fugir de inimigos e transportar pequenas tripulações.

Características:

Capacidade para até 10 tripulantes.
Velocidade muito alta.
Resistência baixa.
Poucos canhões. */

import { Navio } from "./Navio";

export class Chalupa extends Navio {
    constructor() {
        super("Chalupa", 10, 50, 4, "Muito Alta", 5);
    }

    public navegar(): void {
        console.log(`A chalupa ${this.nome} utiliza sua agilidade para realizar manobras rápidas.`);
    }

    public atacar(): void {
        console.log(`A chalupa ${this.nome} dispara seus canhões e tenta escapar rapidamente.`);
    }

    public explorarIlha(): void {
        console.log(`A chalupa ${this.nome} está explorando uma ilha em busca de tesouros.`);
    }
    
    }
