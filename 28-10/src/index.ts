import { Veiculo } from "./Veiculo";
import { Carro }  from "./Carro";
import { Bike } from "./Bike";

// Testando polimorfismo ARRAY
const Movimento: Veiculo[] = [
    new Veiculo(),
    new Carro(),
    new Bike()
];



Movimento.forEach(Movi => {
    console.log(`seu movimento está a km por hora: ${Movi.Movimentacao()}`);
});

