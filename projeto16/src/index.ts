import { Personagem } from './Personagem';
import { Arma } from './Arma';

// Criando as armas
const espada = new Arma('Espada Longa', 20);
const cajado = new Arma('Cajado Mágico', 15);

// Criando os personagens com as respetivas armas
const personagem1 = new Personagem('Darius', 10, espada);
const personagem2 = new Personagem('Garen', 12, cajado);

console.log(`Vida inicial do ${personagem2.nome}: ${personagem2.vida}`);

// Testando o ataque utilizando a arma
personagem1.atacar(personagem2);

console.log(`Vida atual do ${personagem2.nome} após o ataque: ${personagem2.vida}`);