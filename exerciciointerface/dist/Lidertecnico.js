"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LiderTecnico = void 0;
class LiderTecnico {
    constructor(nome) {
        this.nome = nome;
    }
    trabalhar() {
        console.log(`${this.nome} está trabalhando...`);
    }
    programar() {
        console.log(`${this.nome} está programando...`);
    }
    gerenciarEquipes() {
        console.log(`${this.nome} está gerenciando equipes...`);
    }
}
exports.LiderTecnico = LiderTecnico;
