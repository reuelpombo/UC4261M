"use strict";
/*   o dev pode trabalhar e programar
o gerente pode trabalhar e gerenciar equipes
o lider tecnico pode trabalhar e programar e gerenciar equipes
itrabalhador possui metodo trabalhar
iprogramador possui metodo programar

igerente possui o metodo gerenciar

todas as classes dev gerente lidertecnico devertao possuir
tambem atributo nome cada metodo deve retornar uma mensagem
crie um objeto de cada no main e chame seus metodos .  */
Object.defineProperty(exports, "__esModule", { value: true });
const Desenvolvedor_1 = require("./Desenvolvedor");
const Gerente_1 = require("./Gerente");
const Lidertecnico_1 = require("./Lidertecnico");
/*
  O dev pode trabalhar e programar
  O gerente pode trabalhar e gerenciar equipes
  O líder técnico pode trabalhar, programar e gerenciar equipes
*/
const gerente = new Gerente_1.Gerente("Daniel Vorcaro");
const trabalhador = new Desenvolvedor_1.Desenvolvedor("Alex Telles");
const liderTecnico = new Lidertecnico_1.LiderTecnico("Pedro Pascal");
// Chamando os métodos de cada um
console.log("--- GERENTE ---");
gerente.gerenciarEquipes();
gerente.trabalhar();
console.log("\-- DESENVOLVEDOR --");
trabalhador.programar();
trabalhador.trabalhar();
console.log("\--- LÍDER TÉCNICO ---");
liderTecnico.programar();
liderTecnico.trabalhar();
liderTecnico.gerenciarEquipes();
