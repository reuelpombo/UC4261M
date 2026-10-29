"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Crocodilo_1 = require("./Crocodilo");
// 1. Crie um objeto da classe Crocodilo
const meuCrocodilo = new Crocodilo_1.Crocodilo("Jacaré sussuarana");
// 2. Chame o método mover(), herdado de Animal
meuCrocodilo.mover();
// 3. Chame o método botarOvo(), herdado de Reptil
meuCrocodilo.botarOvo();
// 4. Chame o método nadar(), definido na própria classe Crocodilo
meuCrocodilo.nadar();
// Exercício 1: Criando uma subclasse
// Crie uma classe Crocodilo que herde da classe Reptil.
// A classe Crocodilo deve:
// Possuir um método nadar(), que exiba uma mensagem informando que o crocodilo está nadando.
// Utilizar os atributos e métodos herdados das classes Reptil e Animal.
// No arquivo index.ts:
// Crie um objeto da classe Crocodilo.
// Chame o método mover(), herdado de Animal.
// Chame o método botarOvo(), herdado de Reptil.
// Chame o método nadar(), definido na própria classe Crocodilo.
