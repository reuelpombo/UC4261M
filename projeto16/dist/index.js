"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Personagem_1 = require("./Personagem");
const Arma_1 = require("./Arma");
// Criando as armas
const espada = new Arma_1.Arma('Espada Longa', 20);
const cajado = new Arma_1.Arma('Cajado Mágico', 15);
// Criando os personagens com as respetivas armas
const personagem1 = new Personagem_1.Personagem('Darius', 10, espada);
const personagem2 = new Personagem_1.Personagem('Garen', 12, cajado);
console.log(`Vida inicial do ${personagem2.nome}: ${personagem2.vida}`);
// Testando o ataque utilizando a arma
personagem1.atacar(personagem2);
console.log(`Vida atual do ${personagem2.nome} após o ataque: ${personagem2.vida}`);
//# sourceMappingURL=index.js.map