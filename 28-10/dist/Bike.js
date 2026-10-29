"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bike = void 0;
const Veiculo_1 = require("./Veiculo");
// Subclasse: Bike
class Bike extends Veiculo_1.Veiculo {
    Movimentacao() {
        return 5; // Movimento Bike
    }
}
exports.Bike = Bike;
