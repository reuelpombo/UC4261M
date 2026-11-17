import { Personagem } from "./Personagem";
import { Curavel, Equipavel } from "./interfaces";

export class Guardiao extends Personagem implements Curavel, Equipavel {
  private protecaoDivina: boolean;

  constructor(nome: string, vida: number, ataque: number, defesa: number) {
    super(nome, vida, vida, ataque, defesa);
    this.protecaoDivina = true;
  }

  public curarAliado(alvo: Personagem): void {
    console.log(`${this.nome} levanta o Escudo do Rancho e cura ${alvo.getNome()}!`);
    alvo.curar(25);
  }

  public equiparItem(item: string): void {
    console.log(`${this.nome} equipou o baluarte: ${item}.`);
    this.defesa += 8;
  }

  public atacar(alvo: Personagem): void {
    if (!this.estaVivo()) {
      console.log(`${this.nome} está derrotado e não pode atacar!`);
      return;
    }
    console.log(`${this.nome} avança com o Escudo do Rancho esmagando ${alvo.getNome()}!`);
    alvo.receberDano(this.ataque);
  }
}