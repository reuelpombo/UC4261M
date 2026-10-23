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

protected nome: string
protected vida : number = 100       // atributos
         

constructor(nome:string, vida:number) {;


this.nome = nome
    this.vida = vida   //construtor

}

curar(): void {
    this.vida += 10 
}

mostrarDados():void {
    this.mostrarDados 
}

}
