<!-- ENCAPSULAMENTO 
ENCAPSULAMENTO É UM ATO DE PROTEGER OS DADOS NOSSOS OBJETOS TANTO OS ATRIBUIDOS QUANTO OS METODOS E CONTROLAR COMO PODEM SER ACESSADOS OU MODIFICADOS 
EXEMPO USANDO ENCAPSULAMENTO PODEMOS IMPEDIR QUE ALGUEM DEIXE A VIDA DO POKEMON NEGATIVO 
PARA UTILIZAR O ENCAPSULAMENTO NAS NOSSAS CLASSES PRECISAMOS COLOCAR CERTAS PALAVRAS ANTES DOS ATRIBUTOS E ANTES DOS METODOS ELAS SÃO:

- PUBLIC ( QUE SIGNIFICA PUBLICO)
- PRIVATE (QUE SIGNIFICA PRIVADO
- PROTECTED (QUE SIGNIFICA PROTEGIDO)) -->


<!-- public (Público): O atributo ou método pode ser acessado e modificado livremente de qualquer lugar (dentro ou fora da classe). É o padrão quando não definimos nada. -->

<!-- (Privado): O atributo ou método só pode ser acessado e modificado dentro da própria classe onde foi criado. Nenhuma outra classe ou arquivo consegue mexer nele diretamente. -->

<!-- (Protegido): É similar ao privado, mas permite que o atributo ou método seja acessado tanto pela própria classe quanto por classes filhas (em heranças). -->
<!-- 
import { Poder } from "./Poder"

export class Pokemon {
    nome: string
    private _vida: number // Atributo privado (por convenção, usamos _ na frente)
    ataque: number
    poder: Poder

    constructor(nome: string, vida: number, ataque: number, poder: Poder) {
        this.nome = nome
        this._vida = vida // Usa a lógica do setter ou atribui direto inicialmente
        this.ataque = ataque
        this.poder = poder
    }

    // GETTER: Permite ler a vida de fora da classe de forma segura
    get vida(): number {
        return this._vida
    }

    // SETTER: Controla e valida como a vida pode ser alterada
    set vida(novaVida: number) {
        if (novaVida < 0) {
            this._vida = 0 // Se tentarem colocar valor negativo, travamos em 0
        } else {
            this._vida = novaVida
        }
    }

    falar(): void {
        console.log(`${this.nome} `.repeat(3))
    }

    atacar(alvo: Pokemon): void {
        if (alvo.vida > 0) {
            // Aqui chamamos o setter indiretamente ao subtrair a vida
            alvo.vida = alvo.vida - this.ataque
            console.log(`${this.nome} atacou ${alvo.nome} e causou ${this.ataque} de dano!`)
        } else {
            console.log(`${alvo.nome} já está derrotado!`)
        }
    }

    atacarComPoder(alvo: Pokemon): void {
        if (alvo.vida > 0) {
            alvo.vida = alvo.vida - this.poder.ataque
            console.log(`${this.nome} usou o poder ${this.poder.nome} em ${alvo.nome}, causando ${this.poder.ataque} de dano!`)
        } else {
            console.log(`${alvo.nome} já está derrotado!`)
        }
    }
} -->

<!-- AGORA NOVO OBJETIVO 


CRIEM UMA CLASSE PERSONAGEM QUE TENHA 


NOME VIDA DINHEIRO


COLOQUE TODAS AS ATRIBUTOS COM PRIVATE 

CRIE METODO QUE MOSTRE EXEMPLO MostrarVida()

crie um meotdo que modifica a vida (exemplo: mudarVida(vida:number)) -->

