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
console.log("Gerente:");
const gerente = {
    gerenciarEquipes: () => {
        console.log("o Gerente está Gerenciando equipes...");
    }
};
gerente.gerenciarEquipes();
