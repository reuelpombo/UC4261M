export class Animal {
    constructor(public nome: string) {}

    public mover(): void {
        console.log(`${this.nome} está se movendo.`);  
    }
}