"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Guerreiro_1 = require("./Guerreiro");
const Mago_1 = require("./Mago");
const guerreiro = new Guerreiro_1.Guerreiro("Aragorn");
const mago = new Mago_1.Mago("Gandalf");
guerreiro.atacar();
mago.lancarMagia();
