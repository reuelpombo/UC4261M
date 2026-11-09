/* O galeão é uma embarcação enorme, resistente e fortemente armada, ideal para batalhas navais de grande escala.

Características:

Capacidade para até 50 tripulantes.
Velocidade baixa.
Resistência alta.
Grande quantidade de canhões. */ 

import { Navio } from "./Navio";

export class Galeao extends Navio {
    constructor() {
        super("Galeão", 50, 200, 30, "Baixa", 40);
    }

    public override navegar(): void {
        console.log("O galeão avança lentamente pelo mar.");
    }

    public override atacar(): void {
        console.log("O galeão dispara uma poderosa salva de canhões.");
    }

    public repararNavio(quantidade: number): void {
        if (quantidade < 0) {
            console.log("Erro: A quantidade de reparo não pode ser negativa!");
            return;
        }

        this.vidaAtual += quantidade;
        if (this.vidaAtual > this.vidaMaxima) {
            this.vidaAtual = this.vidaMaxima;
        }
        console.log(`O galeão foi reparado. Vida atual: ${this.vidaAtual}/${this.vidaMaxima}`);
    }
}

