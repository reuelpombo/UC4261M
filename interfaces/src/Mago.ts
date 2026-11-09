import { IAtacante } from "./IAtacante";

export class Mago implements IAtacante
 {    /* A interface define uma regra como assim? ela diz que todos os que seguirem ela precisam
    implementar o método atacar() */
  public nome: string;
  

  constructor(nome: string ) {
    this.nome = nome;
  }

  public atacar(): void {
    console.log(`${this.nome} lança uma Magia poderosa!`);
  }


   public curar(valorCura: number): void {
    console.log(`${this.nome} lança uma Magia de Cura!`);
   }


  public lancarMagia(): string {
    return `${this.nome} lança uma Magia poderosa!`;
  }
  
  }







