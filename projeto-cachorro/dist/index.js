"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Cachorro_1 = require("./Cachorro");
// Criando 3 cachorros diferentes
const dog1 = new Cachorro_1.Cachorro("Thor", "Golden Retriever", 3);
const dog2 = new Cachorro_1.Cachorro("Mel", "Poodle", 5);
const dog3 = new Cachorro_1.Cachorro("Spike", "Bulldog", 2);
// Usando os Getters para ler os dados
console.log(`Cachorro 1: ${dog1.nome}, Raça: ${dog1.raca}, Idade: ${dog1.idade} anos`);
console.log(`Cachorro 2: ${dog2.nome}, Raça: ${dog2.raca}, Idade: ${dog2.idade} anos`);
// Usando os Setters para modificar dados com segurança
dog3.idade = 4; // Atualizando a idade usando o setter
dog3.nome = "Spike Junior"; // Atualizando o nome
console.log(`Cachorro 3 atualizado: ${dog3.nome}, Raça: ${dog3.raca}, Idade: ${dog3.idade} anos`);
// Chamando métodos da classe
dog1.latir();
dog2.latir();
dog3.latir();
//# sourceMappingURL=index.js.map