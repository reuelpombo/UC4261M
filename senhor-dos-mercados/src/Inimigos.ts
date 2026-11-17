import { Personagem } from "./Personagem";

export class FiscalDePrecos extends Personagem {
  constructor() {
    super("Fiscal de Preços (Rede Alfa)", 60, 60, 12, 4);
  }
}

export class OperadorDeOfertas extends Personagem {
  constructor() {
    super("Operador de Ofertas (Rede Ômega)", 80, 80, 15, 6);
  }
}

export class BalrogDoBoleto extends Personagem {
  constructor() {
    super("Balrog do Boleto (Chefe Final)", 150, 150, 22, 10);
  }

  public atacar(alvo: Personagem): void {
    console.log(` ${this.nome} ruge: "VOCÊ NÃO VAI PARCELAR!" e desfere um golpe devastador!`);
    alvo.receberDano(this.ataque);
  }
}