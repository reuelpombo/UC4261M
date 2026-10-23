"use strict";
//usando a palavra extends informamos que a classe Guerreiro
// herda a classe Personagem tudo que ela tem o Guerreiro tambem tem 
// export class Guerreiro extends Personagem { 
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guerreiro = void 0;
//   super vem de superclass que é a classe PAI/MAIN 
//   super nada mais é doque o constructor da class PAI no caso do Personagem
//   super(nome,vida,)
//   ele criou this.armadura porque a armadura só tem aqui o nome vida 
//   ele puxou la do Personagem
const Personagem_1 = require("./Personagem");
class Guerreiro extends Personagem_1.Personagem {
    armadura;
    constructor(nome, vida, armadura) {
        super(nome, vida);
        this.armadura = armadura;
    }
    usarEscudo() {
        console.log(`${this.nome} usou o escudo de ${this.armadura} para se defender!`);
    }
}
exports.Guerreiro = Guerreiro;
//# sourceMappingURL=Guerreiro.js.map