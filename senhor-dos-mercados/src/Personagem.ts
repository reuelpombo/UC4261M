
export class Personagem {
  protected nome: string;
  protected vida: number;
  protected vidaMaxima: number;
  protected ataque: number;
  protected defesa: number;

  constructor(nome: string, vida: number, vidaMaxima: number, ataque: number, defesa: number) {
    this.nome = nome;
    this.vida = vida;
    this.vidaMaxima = vidaMaxima;
    this.ataque = ataque;
    this.defesa = defesa;
  }

  public exibirStatus(): void {
    console.log(`Nome: ${this.nome}`);
    console.log(`Vida: ${this.vida}/${this.vidaMaxima}`);
    console.log(`Ataque: ${this.ataque}`);
    console.log(`Defesa: ${this.defesa}`);
  }

  public getNome(): string {
    return this.nome;
  }

  public getVida(): number {
    return this.vida;
  }

  public setVida(vida: number): void {
    this.vida = vida < 0 ? 0 : vida > this.vidaMaxima ? this.vidaMaxima : vida;
  }

  public getVidaMaxima(): number {
    return this.vidaMaxima;
  }

  public getAtaque(): number {
    return this.ataque;
  }

  public getDefesa(): number {
    return this.defesa;
  }

  public receberDano(dano: number): void {
    if (dano < 0) return;
    const danoReal = dano - this.defesa;
    const danoFinal = danoReal > 0 ? danoReal : 0;
    this.vida -= danoFinal;
    if (this.vida < 0) this.vida = 0;
  }

  public curar(quantidade: number): void {
    if (quantidade < 0) return;
    this.vida += quantidade;
    if (this.vida > this.vidaMaxima) {
      this.vida = this.vidaMaxima;
    }
  }

  public estaVivo(): boolean {
    return this.vida > 0;
  }

  public atacar(alvo: Personagem): void {
    console.log(`${this.nome} ataca ${alvo.getNome()}!`);
    alvo.receberDano(this.ataque);
  }
}








