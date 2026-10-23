"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Personagem_1 = require("./Personagem");
const Guerreiro_1 = require("./Guerreiro");
// Testando a classe Personagem
const per1 = new Personagem_1.Personagem("Garen", 300);
const per2 = new Personagem_1.Personagem("Darius", 300);
console.log(per1.getNome());
console.log(per1.getVida());
console.log(per2.getNome());
console.log(per2.getVida());
const guerreiro1 = new Guerreiro_1.Guerreiro("Thor", 100, "ferro");
guerreiro1.mostrarDados();
guerreiro1.usarEscudo();
// import { Cachorro } from "./Cachorro";
// const dog: Cachorro = new Cachorro("Boxer", "marley", 4, 
// "amarelo" );
// dog.fazerSom()
//exercicio herança e protected. 
// crie uma classe chamada Personagem com:
// - os atributos preotected nome: string e protected vida : number :
// -um constructor que recebe o nome e inicie a vida em 100
// - um metodo curar(), que aumente a vida em 10;
// - um metodo mostrarDados(), que exiba o nome e a vida.
//# sourceMappingURL=index.js.map