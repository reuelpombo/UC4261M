"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carro = void 0;
const Veiculo_1 = require("./Veiculo");
// Subclasse: Carro ele importa do veiculo porque ele recebe apenas ele é subdesenvolvido Extends significa Herdar da classe MAIN 
// então significa que vai ser "Export class Meu nome extends herdar Main"
class Carro extends Veiculo_1.Veiculo {
    Movimentacao() {
        return 30; // movimentacao carro 
    }
}
exports.Carro = Carro;
