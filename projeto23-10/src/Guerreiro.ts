

 //usando a palavra extends informamos que a classe Guerreiro
// herda a classe Personagem tudo que ela tem o Guerreiro tambem tem 
// export class Guerreiro extends Personagem { 



    
//   super vem de superclass que é a classe PAI/MAIN 
//   super nada mais é doque o constructor da class PAI no caso do Personagem
//   super(nome,vida,)
//   ele criou this.armadura porque a armadura só tem aqui o nome vida 
//   ele puxou la do Personagem


import { Personagem } from "./Personagem";

export class Guerreiro extends Personagem {
  armadura: string;

  constructor(nome: string, vida: number, armadura: string) {
    super(nome, vida);
    this.armadura = armadura;
  }

  usarEscudo(): void {
    console.log(`${this.nome} usou o escudo de ${this.armadura} para se defender!`);
  }
}