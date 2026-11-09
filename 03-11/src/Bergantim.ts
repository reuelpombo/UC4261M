/* ClasseBergantim
O Bergantim é um navio equilibrado, adequado para explorar as éguas e enfrentar outros piratas.

Características:

Capacidade para até 20 tripulantes.
Velocidade alta.
Resistência.
Quantidade distribuída de canhões. */

import { Navio } from "./Navio";

export class Bergantim extends Navio {
    constructor() {
        super("Bergantim", 20, 100, 15, "Alta", 20);
    }

    public  navegar(): void {
        console.log(`O bergantim ${this.nome} aproveita seus ventos projetados para navegar rapidamente.`);
    }

    public atacar(): void {
        console.log(`O bergantim ${this.nome} realiza uma sequência rápida de disparos.`);
    }

    private verificaTripulacao(): void {
        if (this.maxTripulacao > 20) {
            this.capacidadeTripulacao = 20;
    
        
        }
    }
}
