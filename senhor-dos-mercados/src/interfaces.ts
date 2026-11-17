import { Personagem } from "./Personagem";

export interface Curavel {
  curarAliado(alvo: Personagem): void;
}

export interface Equipavel {
  equiparItem(item: string): void;
}

export interface HabilidadeEspecial {
  usarHabilidadeEspecial(alvo: Personagem): void;
}