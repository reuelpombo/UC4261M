// Exercício 2: Organizando uma hierarquia de animais
// Vamos ampliar nosso sistema de animais utilizando herança.

// Parte 1 — Criando as classes
// Crie as seguintes classes:

// Ave: deve herdar de Animal.
// Cachorro: deve herdar de Mamifero.
// Coruja: deve herdar de Ave.
// Cada classe deve possuir seu próprio construtor, recebendo os parâmetros necessários e utilizando super() para chamar o construtor da classe pai.

import { Mamifero } from "./Mamifero";
import { Ave } from "./Ave";
import { Animal} from "./Animal";


// Criando objetos
const cachorro = new Mamifero ("Rex", 5, true);
const Coruja = new Ave ("Naja", 2, "escamas lisas");
const Coruja

cachorro.mover();      // herdado da classe Animal
cachorro.amamentar();  // método da classe Mamifero

cobra.mover();         // herdado da classe Animal
cobra.botarOvo();      // método da classe Reptil


