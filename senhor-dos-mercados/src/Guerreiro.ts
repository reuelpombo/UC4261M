import { Personagem } from "./Personagem";
import { Equipavel } from "./interfaces";

export class Guerreiro extends Personagem implements Equipavel {
  private armaduraExtra: number;

  constructor(nome: string, vida: number, ataque: number, defesa: number, armaduraExtra: number) {
    super(nome, vida, vida, ataque, defesa);
    this.armaduraExtra = armaduraExtra;
  }

  public equiparItem(item: string): void {
    console.log(`${this.nome} equipou a pesada armadura/item: ${item}! Defesa aumentada.`);
    this.defesa += 5;
  }

  public atacar(alvo: Personagem): void {
    if (!this.estaVivo()) {
      console.log(`${this.nome} está derrotado e não pode atacar!`);
      return;
    }
    console.log(`${this.nome} desempanha o Facão de Cortar Salame e desfere um golpe brutal em ${alvo.getNome()}!`);
    const danoTotal = this.ataque + 10;
    alvo.receberDano(danoTotal);
  }
}