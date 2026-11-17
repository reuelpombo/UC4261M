import readline from "readline-sync";
import { Guerreiro } from "./Guerreiro";
import { Arqueiro } from "./Arqueiro";
import { Guardiao } from "./Guardiao";
import { FiscalDePrecos, OperadorDeOfertas, BalrogDoBoleto } from "./Inimigos";
import { Personagem } from "./Personagem";

// Instanciando a Sociedade
const seuZe = new Guerreiro("Seu Zé", 120, 20, 8, 10);
const diegolas = new Arqueiro("Diegolas", 90, 25, 5, 15);
const samuel = new Guardiao("Samuel", 140, 15, 12);
const fredo = new Arqueiro("Fredo", 100, 18, 6, 10);

const sociedade: Personagem[] = [seuZe, diegolas, samuel, fredo];

let heroiAtual: Personagem = seuZe; // Herói padrão selecionado
let progressoMissao = 1; // Controla as fases do jogo

function simularCombate(heroi: Personagem, inimigo: Personagem): void {
  console.log(`\n Um ${inimigo.getNome()} apareceu para o combate!`);

  while (heroi.estaVivo() && inimigo.estaVivo()) {
    console.log(`\n--- TURNO DE ${heroi.getNome().toUpperCase()} ---`);
    console.log(`1 - Atacar`);
    console.log(`2 - Usar Habilidade Especial`);
    console.log(`3 - Ver Status da Batalha`);
    
    const acao = readline.question("Escolha sua acao: ");

    if (acao === "1") {
      heroi.atacar(inimigo);
    } else if (acao === "2") {
      if ("usarHabilidadeEspecial" in heroi) {
        (heroi as any).usarHabilidadeEspecial(inimigo);
      } else {
        console.log(`${heroi.getNome()} não possui habilidade especial ativa, desferindo ataque normal.`);
        heroi.atacar(inimigo);
      }
    } else {
      heroi.exibirStatus();
      inimigo.exibirStatus();
      continue;
    }

    if (!inimigo.estaVivo()) {
      console.log(`\n🏆 Vitória! O inimigo ${inimigo.getNome()} foi derrotado!`);
      progressoMissao++;
      break;
    }

    // Contra-ataque do inimigo
    console.log(`\n--- TURNO DO INIMIGO ---`);
    inimigo.atacar(heroi);

    if (!heroi.estaVivo()) {
      console.log(`\n Derrota! ${heroi.getNome()} caiu em combate...`);
      break;
    }
  }
}

function menuPrincipal() {
  let opcao = "";

  do {
    console.log("\n==============================");
    console.log("=== O SENHOR DOS MERCADOS II ===");
    console.log("==============================");
    console.log("1 - Ver Sociedade");
    console.log("2 - Escolher herói");
    console.log("3 - Enfrentar inimigo (Jornada)");
    console.log("4 - Ver jornada (Progresso)");
    console.log("0 - Sair");

    opcao = readline.question("\nEscolha: ");

    switch (opcao) {
      case "1":
        console.log("\n--- MEMBROS DA SOCIEDADE ---");
        sociedade.forEach((p, index) => {
          console.log(`\n[${index + 1}]`);
          p.exibirStatus();
          console.log(`Status de vida: ${p.estaVivo() ? " Vivo" : " Derrotado"}`);
        });
        break;

      case "2":
        console.log("\n--- ESCOLHER HERÓI ATIVO ---");
        sociedade.forEach((p, index) => {
          console.log(`${index + 1} - ${p.getNome()} (${p.estaVivo() ? "Vivo" : "Morto"})`);
        });
        const escolhaHeroi = parseInt(readline.question("Digite o número do herói: ")) - 1;
        if (escolhaHeroi >= 0 && escolhaHeroi < sociedade.length) {
          if (sociedade[escolhaHeroi].estaVivo()) {
            heroiAtual = sociedade[escolhaHeroi];
            console.log(` Herói ativo alterado para: ${heroiAtual.getNome()}`);
          } else {
            console.log(" Este herói está derrotado e não pode ser escolhido!");
          }
        } else {
          console.log(" Opção inválida!");
        }
        break;

      case "3":
        if (!heroiAtual.estaVivo()) {
          console.log("❌ Seu herói atual está derrotado! Escolha outro no menu 2.");
          break;
        }

        if (progressoMissao === 1) {
          const inimigo1 = new FiscalDePrecos();
          simularCombate(heroiAtual, inimigo1);
        } else if (progressoMissao === 2) {
          const inimigo2 = new OperadorDeOfertas();
          simularCombate(heroiAtual, inimigo2);
        } else if (progressoMissao >= 3) {
          const chefe = new BalrogDoBoleto();
          simularCombate(heroiAtual, chefe);
        }
        break;

      case "4":
        console.log(`\n🗺️ Progresso atual da jornada: Fase ${progressoMissao} do Servidor da Perdição.`);
        break;

      case "0":
        console.log("\nSaindo da aventura. Até logo!");
        break;

      default:
        console.log("\n❌ Opção inválida! Tente novamente.");
        break;
    }
  } while (opcao !== "0");
}

// Iniciar aplicação
menuPrincipal();