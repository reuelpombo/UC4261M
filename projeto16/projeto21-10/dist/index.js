"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Pokemon_1 = require("./Pokemon");
const Poder_1 = require("./Poder");
// Criando dois poderes
const poder1 = new Poder_1.Poder("Choque do Trovão", 30);
const poder2 = new Poder_1.Poder("Lança-Chamas", 25);
// Criando dois Pokémons
const pikachu = new Pokemon_1.Pokemon("Pikachu", 100, 30, poder1);
const charmander = new Pokemon_1.Pokemon("Charmander", 100, 25, poder2);
// Pequena batalha
pikachu.falar();
charmander.falar();
pikachu.atacar(charmander);
charmander.atacar(pikachu);
pikachu.atacarComPoder(charmander);
charmander.atacarComPoder(pikachu);
console.log(pikachu);
console.log(charmander);
//# sourceMappingURL=index.js.map