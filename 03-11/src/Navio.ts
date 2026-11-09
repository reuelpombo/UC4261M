export abstract class Navio {
    protected nome: string;
    protected capacidadeTripulacao: number;
    protected maxTripulacao: number;
    protected velocidade: string;
    protected vidaAtual: number;
    protected vidaMaxima: number;
    protected quantidadeCanhoes: number;

    constructor(
        nome: string, 
        maxTripulacao: number, 
        vidaMaxima: number, 
        quantidadeCanhoes: number, 
        velocidade: string,
        tripulacaoAtual: number
    ) {
        this.nome = nome;
        this.maxTripulacao = maxTripulacao;
        this.vidaMaxima = vidaMaxima;
        this.vidaAtual = vidaMaxima;
        this.quantidadeCanhoes = quantidadeCanhoes;
        this.velocidade = velocidade;
        
        if (tripulacaoAtual > maxTripulacao) {
            this.capacidadeTripulacao = maxTripulacao;
        } else {
            this.capacidadeTripulacao = tripulacaoAtual;
        }
    }

    // Métodos comuns que podem ser sobrescritos
    public navegar(): void {
        console.log(`${this.nome} está navegando pelo mar.`);
    }

    public atacar(): void {
        console.log(`${this.nome} realizou um ataque básico.`);
    }

    public receberDano(dano: number): void {
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

    public exibirInformacoes(): void {
        console.log(`--- Informações do Navio: ${this.nome} ---`);
        console.log(`Tripulação: ${this.capacidadeTripulacao}/${this.maxTripulacao}`);
        console.log(`Velocidade: ${this.velocidade}`);
        console.log(`Vida: ${this.vidaAtual}/${this.vidaMaxima}`);
        console.log(`Canhões: ${this.quantidadeCanhoes}`);
        console.log(`------------------------------------------`);
    }

    public getVidaAtual(): number {
        return this.vidaAtual;
    }

    public getVidaMaxima(): number {
        return this.vidaMaxima;
    }
}