



export class Cachorro {
    private nome: string
    private raca: string
    private peso: number

    constructor(nome: string, raca: string, peso: number) {
        this.nome = nome
        this.raca = raca
        this.peso = peso
    }
    getNome(): string {
        return this.nome;
    }
    setNome(novoNome: string): void {
        this.nome = novoNome;
    }
    getraca(): string {
        return this.raca
    }

    setraca(novoRaca: string): void {
        this.raca = novoRaca
    }

    getPeso(): number {
        return this.peso
    }

    setPeso(novoPeso: number): void {
        this.peso = novoPeso
    }
}