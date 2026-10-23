"use strict";
/* crie uma classe chamada pokemon
o pokemon deve ter nome(string),vida(string) ataque(number) e um poder ,
poder é uma classe que vamos criar tambem

metodos do pokemon
falar > um metodo repete o nome do pokemon algumas vezes exemplo pikapikachuuuu

atacar > um metodo que recebe o outro pokemon e ataca ele tirando a vida dele
atacarComPoder > um metodo que recebe outro pokemon e ataca ele tambem porem diz o nome do poder e usa o ataque do poder

(2) crie uma classe chamada Poder Ela deve ter o nome (string) e ataque (number) não precisa de nenhum metodo exceto o constructor

3) crie dois poderes e dois pokemons no index simule uma pequena batalha entre eles.

*/
Object.defineProperty(exports, "__esModule", { value: true });
const Pokemon_1 = require("./Pokemon");
const Poder_1 = require("./Poder");
// Criando dois poderes
const raio = new Poder_1.Poder('Choque do Trovão', 70);
const mordida = new Poder_1.Poder('Mordida Rápida', 20);
console.log("------------------------------------------------");
console.log("------------------------------------------------");
const pokemon1 = new Pokemon_1.Pokemon('Pikachu', 100, 10, raio);
const pokemon2 = new Pokemon_1.Pokemon('Rattata', 80, 8, mordida);
console.log("------------------------------------------------");
console.log("------------------------------------------------");
console.log("------------------------------------------------");
console.log('---Lets go  Battle ---');
console.log(`Vida inicial do ${pokemon1.nome}: ${pokemon1.vida}`);
console.log(`Vida inicial do ${pokemon2.nome}: ${pokemon2.vida}\n`);
console.log("------------------------------------------------");
console.log("------------------------------------------------");
console.log("------------------------------------------------");
// Pokemons falam
pokemon1.falar();
pokemon2.falar();
console.log('AAAAA TOME SEU SEM FUTURO');
console.log("------------------------------------------------");
console.log("------------------------------------------------");
console.log("------------------------------------------------");
pokemon1.atacar(pokemon2);
console.log(`Vida atual do ${pokemon2.nome}: ${pokemon2.vida}`);
console.log("------------------------------------------------");
console.log("------------------------------------------------");
pokemon2.atacarComPoder(pokemon1);
console.log(`Vida atual do ${pokemon1.nome}: ${pokemon1.vida}`);
console.log("------------------------------------------------");
console.log("------------------------------------------------");
console.log("------------------------------------------------");
pokemon1.atacarComPoder(pokemon2);
console.log(`Vida final do ${pokemon2.nome}: ${pokemon2.vida}`);
console.log('--- Descanse em Piace Rato do banhado ---');
//# sourceMappingURL=index.js.map