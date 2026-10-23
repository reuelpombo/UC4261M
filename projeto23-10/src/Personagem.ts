//exercicio herança e protected. 

// crie uma classe chamada Personagem com:
// - os atributos preotected nome: string e protected vida : number :
// -um constructor que recebe o nome e inicie a vida em 100
// - um metodo curar(), que aumente a vida em 10;
// - um metodo mostrarDados(), que exiba o nome e a vida.
// - crie a classe guerreiro que herda de personagem (lembre se de usar o 'extends')
// - crie um atributo 'armadura:string' que mostra o tipo de armadura (exemplo: de ferro ,de ouro)
// - de aço)
// - Crie o constructor:
// - constructor ( armadura:string, vida:number) {
//   super(nome.vida)
//   this.armadura = armadura

// crie o metodo usarEscudo() que retorna uma frase 'fulano usou o escudo para se defender'


export class Personagem {
  protected nome: string;
  protected vida: number = 100; 

  constructor(nome: string, vida: number) {
    this.nome = nome;
    this.vida = vida;
  }

  curar(): void {
    this.vida += 10;
  }

  mostrarDados(): void {
    console.log(`Nome: ${this.nome} | Vida: ${this.vida}`);
  }

  getNome(): string {
    return this.nome;
  }

  getVida(): number {
    return this.vida;
  }

  setVida(novaVida: number): void {
    this.vida = novaVida;
  }
}




















// essa classe vai ser a classe PAI main 

// export class Mamifero {
// private nome: string
// protected patas: number         // atributos
// private pelo: string

// constructor(nome:string, patas:number, pelo:string) {
//     this.nome = nome
//     this.patas = patas     //construtor
//     this.pelo = pelo
// }

// fazerSom():void {
//     console.log(`${this.nome} está fazendo um barulho.`);
// }

// getNome():string{
// return this.nome
// }

// setNome(novoNome:string):void {;
//  this.nome = novoNome;
// }
// }

