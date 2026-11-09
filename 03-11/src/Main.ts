import { Bergantim } from "./Bergantim";
import { Chalupa } from "./Chapula";
import { Galeao } from "./Galeao";
import { Navio } from "./Navio";

// 1. Criar objetos de cada tipo de navio
const meuBergantim = new Bergantim();
const minhaChalupa = new Chalupa();
const meuGaleao = new Galeao();

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
const frota: Navio[] = [meuBergantim, minhaChalupa, meuGaleao];

for (const navio of frota) {
    console.log("\n--- Navio da Frota ---");
    navio.navegar();
    navio.atacar();
    navio.exibirInformacoes();
}