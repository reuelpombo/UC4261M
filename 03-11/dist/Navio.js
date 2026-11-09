"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Navio = void 0;
class Navio {
    constructor(nome, maxTripulacao, vidaMaxima, quantidadeCanhoes, velocidade, tripulacaoAtual) {
        this.nome = nome;
        this.maxTripulacao = maxTripulacao;
        this.vidaMaxima = vidaMaxima;
        this.vidaAtual = vidaMaxima;
        this.quantidadeCanhoes = quantidadeCanhoes;
        this.velocidade = velocidade;
        if (tripulacaoAtual > maxTripulacao) {
            this.capacidadeTripulacao = maxTripulacao;
        }
        else {
            this.capacidadeTripulacao = tripulacaoAtual;
        }
    }
    // Métodos comuns que podem ser sobrescritos
    navegar() {
        console.log(`${this.nome} está navegando pelo mar.`);
    }
    atacar() {
        console.log(`${this.nome} realizou um ataque básico.`);
    }
    receberDano(dano) {
        if (dano < 0) {
            console.log("Erro: O dano recebido não pode ser negativo!");
            return;
        }
        this.vidaAtual -= dano;
        if (this.vidaAtual < 0) {
            this.vidaAtual = 0;
        }
        console.log(`${this.nome} recebeu ${dano} de dano. Vida atual: ${this.vidaAtual}/${this.vidaMaxima}`);
    }
    exibirInformacoes() {
        console.log(`--- Informações do Navio: ${this.nome} ---`);
        console.log(`Tripulação: ${this.capacidadeTripulacao}/${this.maxTripulacao}`);
        console.log(`Velocidade: ${this.velocidade}`);
        console.log(`Vida: ${this.vidaAtual}/${this.vidaMaxima}`);
        console.log(`Canhões: ${this.quantidadeCanhoes}`);
        console.log(`------------------------------------------`);
    }
    getVidaAtual() {
        return this.vidaAtual;
    }
    getVidaMaxima() {
        return this.vidaMaxima;
    }
}
exports.Navio = Navio;
