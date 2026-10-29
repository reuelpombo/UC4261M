"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mamifero_1 = require("./Mamifero");
const Reptil_1 = require("./Reptil");
// Criando objetos
const cachorro = new Mamifero_1.Mamifero("Rex", 5, true);
const cobra = new Reptil_1.Reptil("Naja", 2, "escamas lisas");
cachorro.mover(); // herdado da classe Animal
cachorro.amamentar(); // método da classe Mamifero
cobra.mover(); // herdado da classe Animal
cobra.botarOvo(); // método da classe Reptil
