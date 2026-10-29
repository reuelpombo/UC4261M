// Classe base (superclasse)
export class Ave{
  nome: string;
  idade: number;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  Voar(): void {
    console.log(`${this.nome} está Voando...`);
  }
}