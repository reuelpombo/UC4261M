import { Veiculo } from "./Veiculo";

// Subclasse: Bike
export class Bike extends Veiculo {
    public Movimentacao(): number {
        return 5; // Movimento Bike
    }
}