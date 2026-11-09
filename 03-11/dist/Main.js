"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Bergantim_1 = require("./Bergantim");
const Chapula_1 = require("./Chapula");
const Galeao_1 = require("./Galeao");
// 1. Criar objetos de cada tipo de navio
const meuBergantim = new Bergantim_1.Bergantim();
const minhaChalupa = new Chapula_1.Chalupa();
const meuGaleao = new Galeao_1.Galeao();
console.log("=== Exibindo Informações Iniciais ===");
meuBergantim.exibirInformacoes();
minhaChalupa.exibirInformacoes();
meuGaleao.exibirInformacoes();
console.log("\n=== Testando Navegar e Atacar Individualmente ===");
meuBergantim.navegar();
meuBergantim.atacar();
minhaChalupa.navegar();
minhaChalupa.atacar();
meuGaleao.navegar();
meuGaleao.atacar();
console.log("\n=== Simulando Ataques e Dano ===");
meuBergantim.receberDano(30);
minhaChalupa.receberDano(20);
meuGaleao.receberDano(50);
console.log("\n=== Método Exclusivo da Chalupa ===");
minhaChalupa.explorarIlha();
console.log("\n=== Método Exclusivo do Galeão (Reparo) ===");
meuGaleao.repararNavio(30); // Recupera parte da vida
meuGaleao.repararNavio(200); // Testando o limite da vida máxima
console.log("\n=== Testando Situações Inválidas (Encapsulamento) ===");
meuBergantim.receberDano(-10); // Dano negativo
console.log("\n=== Polimorfismo com Coleção de Navios ===");
const frota = [meuBergantim, minhaChalupa, meuGaleao];
for (const navio of frota) {
    console.log("\n--- Navio da Frota ---");
    navio.navegar();
    navio.atacar();
    navio.exibirInformacoes();
}
