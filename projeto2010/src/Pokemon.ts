import { Poder } from './Poder';

export class Pokemon {
  nome: string;
  vida: number;
  ataque: number;
  poder: Poder;

  constructor(nome: string, vida: number, ataque: number, poder: Poder) {
    this.nome = nome;
    this.vida = vida;
    this.ataque = ataque;
    this.poder = poder;
  }

  // Método falar: repete o nome algumas vezes
  falar(): void {
    console.log(`${this.nome} ${this.nome.toLowerCase()}chuuuu!`);
  }

  // Método atacar normal
  atacar(alvo: Pokemon): void {
    alvo.vida -= this.ataque;
    if (alvo.vida < 0) {
      alvo.vida = 0;
    }
    console.log(`${this.nome} atacou ${alvo.nome} com um ataque básico, causando ${this.ataque} de dano!`);
  }

  // Método atacar com poder
  atacarComPoder(alvo: Pokemon): void {
    alvo.vida -= this.poder.ataque;
    if (alvo.vida < 0) {
      alvo.vida = 0;
    }
    console.log(`${this.nome} usou o poder [${this.poder.nome}] em ${alvo.nome}, causando ${this.poder.ataque} de dano!`);
  }
}














