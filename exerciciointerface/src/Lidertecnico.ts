import { IGerente } from "./interfaces/IGerente";
import { IProgramador } from "./interfaces/IProgramador";
import { ITrabalhador } from "./interfaces/ITrabalhador";

export class LiderTecnico implements ITrabalhador, IProgramador, IGerente {
    nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }

    trabalhar(): void {
        console.log(`${this.nome} está trabalhando...`);
    }

    programar(): void {
        console.log(`${this.nome} está programando...`);
    }

    gerenciarEquipes(): void {
        console.log(`${this.nome} está gerenciando equipes...`);
    }
}
