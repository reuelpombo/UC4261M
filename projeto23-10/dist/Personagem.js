"use strict";
//exercicio herança e protected. 
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personagem = void 0;
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
class Personagem {
    nome;
    vida = 100;
    constructor(nome, vida) {
        this.nome = nome;
        this.vida = vida;
    }
    curar() {
        this.vida += 10;
    }
    mostrarDados() {
        console.log(`Nome: ${this.nome} | Vida: ${this.vida}`);
    }
    getNome() {
        return this.nome;
    }
    getVida() {
        return this.vida;
    }
    setVida(novaVida) {
        this.vida = novaVida;
    }
}
exports.Personagem = Personagem;
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
//# sourceMappingURL=Personagem.js.map