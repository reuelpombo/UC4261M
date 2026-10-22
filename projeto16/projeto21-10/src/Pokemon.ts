import { Poder } from "./Poder"

export class Pokemon {
    nome: string
    vida: number
    ataque: number
    poder: Poder

    constructor(nome: string, vida: number, ataque: number, poder: Poder) {
        this.nome = nome
        this.vida = vida
        this.ataque = ataque
        this.poder = poder
    }

    falar(): void {
        console.log(`${this.nome} `.repeat(3))
    }

    atacar(alvo: Pokemon): void {
        if (alvo.vida > 0) {
            alvo.vida -= this.ataque
            console.log(`${this.nome} atacou ${alvo.nome} e causou ${this.ataque} de dano!`)
        } else {
            console.log(`${alvo.nome} já está derrotado!`)
        }
    }

    atacarComPoder(alvo: Pokemon): void {
        if (alvo.vida > 0) {
            alvo.vida -= this.poder.ataque
            console.log(`${this.nome} usou o poder ${this.poder.nome} em ${alvo.nome}, causando ${this.poder.ataque} de dano!`)
        } else {
            console.log(`${alvo.nome} já está derrotado!`)
        }
    }
}