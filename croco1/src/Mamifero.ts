import { Animal } from "./Animal";

export class Mamifero extends Animal {
    constructor(nome: string, public pelo: boolean = true) {
        super(nome);
    }

    public amamentar(): void {
        console.log(`${this.nome} está amamentando.`);
    }
}