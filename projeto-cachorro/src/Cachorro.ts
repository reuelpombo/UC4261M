export class Cachorro {
    // 1. Atributos privados
    private _nome: string
    private _raca: string
    private _idade: number

    // 2. Construtor
    constructor(nome: string, raca: string, idade: number) {
        this._nome = nome
        this._raca = raca
        this._idade = idade < 0 ? 0 : idade // Validação simples para idade não começar negativa
    }

    // 3. Getters e Setters (2 para cada atributo = 6 métodos no total)

    // Getter e Setter para 'nome'
    get nome(): string {
        return this._nome
    }

    set nome(novoNome: string) {
        this._nome = novoNome
    }

    // Getter e Setter para 'raca'
    get raca(): string {
        return this._raca
    }

    set raca(novaRaca: string) {
        this._raca = novaRaca
    }

    // Getter e Setter para 'idade'
    get idade(): number {
        return this._idade
    }

    set idade(novaIdade: number) {
        if (novaIdade < 0) {
            console.log("A idade não pode ser negativa!")
        } else {
            this._idade = novaIdade
        }
    }

    // Método extra para demonstrar o comportamento
    latir(): void {
        console.log(`${this._nome} está latindo: Au Au!`)
    }
}