"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Personagem_1 = require("./Personagem");
// Criando o personagem
const heroi = new Personagem_1.Personagem("Arthur", 100, 50);
// Mostrando a vida inicial
heroi.mostrarVida(); // Saída: A vida atual de Arthur é: 100
// Alterando a vida para um valor válido
heroi.mudarVida(80); // Saída: A vida de Arthur foi alterada para 80.
heroi.mostrarVida(); // Saída: A vida atual de Arthur é: 80
// Tentando colocar uma vida negativa
heroi.mudarVida(-20); // Saída: A vida de Arthur caiu para 0 (não pode ficar negativa).
heroi.mostrarVida(); // Saída: A vida atual de Arthur é: 0
//# sourceMappingURL=index.js.map