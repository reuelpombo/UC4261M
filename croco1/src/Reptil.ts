import { Animal } from "./Animal";

export class Reptil extends Animal {
    constructor(nome: string, public escamas: boolean = true) {
        super(nome);
    }

    public botarOvo(): void {
        console.log(`${this.nome} botou um ovo.`);
    }
}