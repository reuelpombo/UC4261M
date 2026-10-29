// Crie uma classe Crocodilo que herde da classe Reptil.

// A classe Crocodilo deve:

// Possuir um método nadar(), que exiba uma mensagem informando que o crocodilo está nadando.
// Utilizar os atributos e métodos herdados das classes Reptil e Animal.
// Classe base (superclasse)
import { Reptil } from "./Reptil";

export class Crocodilo extends Reptil {
    constructor(nome: string) {
        super(nome);
    }

    public nadar(): void {
        console.log(`${this.nome} está nadando.`);
    }
}
