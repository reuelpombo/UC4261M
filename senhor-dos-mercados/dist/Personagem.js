"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personagem = void 0;
class Personagem {
    constructor(nome, vida, vidaMaxima, ataque, defesa) {
        this.nome = nome;
        this.vida = vida;
        this.vidaMaxima = vidaMaxima;
        this.ataque = ataque;
        this.defesa = defesa;
    }
    exibirStatus() {
        console.log(`Nome: ${this.nome}`);
        console.log(`Vida: ${this.vida}/${this.vidaMaxima}`);
        console.log(`Ataque: ${this.ataque}`);
        console.log(`Defesa: ${this.defesa}`);
    }
    getNome() {
        return this.nome;
    }
    getVida() {
        return this.vida;
    }
    setVida(vida) {
        this.vida = vida < 0 ? 0 : vida > this.vidaMaxima ? this.vidaMaxima : vida;
    }
    getVidaMaxima() {
        return this.vidaMaxima;
    }
    getAtaque() {
        return this.ataque;
    }
    getDefesa() {
        return this.defesa;
    }
    receberDano(dano) {
        if (dano < 0)
            return;
        const danoReal = dano - this.defesa;
        const danoFinal = danoReal > 0 ? danoReal : 0;
        this.vida -= danoFinal;
        if (this.vida < 0)
            this.vida = 0;
    }
    curar(quantidade) {
        if (quantidade < 0)
            return;
        this.vida += quantidade;
        if (this.vida > this.vidaMaxima) {
            this.vida = this.vidaMaxima;
        }
    }
    estaVivo() {
        return this.vida > 0;
    }
    atacar(alvo) {
        console.log(`${this.nome} ataca ${alvo.getNome()}!`);
        alvo.receberDano(this.ataque);
    }
}
exports.Personagem = Personagem;
