export class Guerreiro implements IAtacante {
  public nome: string;
  

  constructor(nome: string ) {
    this.nome = nome;
  }

  public atacar(): void {
    console.log(`${this.nome} ataca com espada!`);
  }
}

  public atacar(): void {
    console.log(`${this.nome} ataca com espada!`);
  }

  public atacar(): string {
    return `${this.nome} ataca com espada!`;
  }


  

}
