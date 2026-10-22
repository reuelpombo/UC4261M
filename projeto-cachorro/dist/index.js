"use strict";
// import { Personagem } from "./Personagem";
Object.defineProperty(exports, "__esModule", { value: true });
// const personagem: Personagem = new Personagem("fulano", 100, 10);
// console.log(personagem.getVida());
const Cachorro_1 = require("./Cachorro");
const cachorro = new Cachorro_1.Cachorro("preus", "pitbul", 14);
const outroCahorro = new Cachorro_1.Cachorro("pett", "viralata", 16);
const novoCachorro = new Cachorro_1.Cachorro("darius", "doberman", 3);
console.log(cachorro.getNome());
console.log(cachorro.getraca());
console.log(cachorro.getPeso());
console.log(outroCahorro.getNome());
console.log(outroCahorro.getraca());
console.log(outroCahorro.getPeso());
console.log(novoCachorro.getNome());
console.log(novoCachorro.getraca());
console.log(novoCachorro.getPeso());
//# sourceMappingURL=index.js.map