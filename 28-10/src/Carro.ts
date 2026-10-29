import { Veiculo } from "./Veiculo";


// Subclasse: Carro ele importa do veiculo porque ele recebe apenas ele é subdesenvolvido Extends significa Herdar da classe MAIN 
// então significa que vai ser "Export class Meu nome extends herdar Main"
export class Carro extends Veiculo{
    public Movimentacao(): number {
        return 30; // movimentacao carro 
    }
}