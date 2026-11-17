
import { Personagem } from "./Personagem";
import { HabilidadeEspecial } from "./interfaces";

export class Arqueiro extends Personagem implements HabilidadeEspecial {
  private agilidade: number;

  constructor(nome: string, vida: number, ataque: number, defesa: number, agilidade: number) {
    super(nome, vida, vida, ataque, defesa);
    this.agilidade = agilidade;
  }

  public usarHabilidadeEspecial(alvo: Personagem): void {
    if (!this.estaVivo()) {
      console.log(`${this.nome} está derrotado e não pode usar habilidades!`);
      return;
    }
    console.log(`${this.nome} dispara uma Chuva de Flechas Élficas em ${alvo.getNome()}!`);
    alvo.receberDano(this.ataque * 1.5);
  }

  public atacar(alvo: Personagem): void {
    if (!this.estaVivo()) {
      console.log(`${this.nome} está derrotado e não pode atacar!`);
      return;
    }
    console.log(`${this.nome} dispara uma flecha precisa com suas Baguetes Élficas em ${alvo.getNome()}!`);
    alvo.receberDano(this.ataque);
  }
}