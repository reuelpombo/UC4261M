"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ./ crie um array que contem X notas 
// Depois calcule a media destas notas e mostre no temrinal
// lembrando a media se calcula somando todos os numeros e dividindo o resultado pela quantidade de numeros 
// dica para somar o array com as notas use um for ./
const notas = [10, 15, 9];
let soma = 0;
for (let i = 0; i < notas.length; i++) {
    notas[i] += 1;
}
let media = soma / notas.length;
console.log(media);
// function soma(a: number, b:number): number {
//     return a + b
// }
// console.log(soma(20,200))
// : Lista de Exercícios
// Escreva uma função que nunca retorna (never), lançando um erro.
// Configure um projeto com tsconfig.json que tenha src/ e dist/.
// 1: Crie uma função dobrar que receba um número e retorne ele dobrado.
// function dobrar(numero: number): number {
//     return numero * 2;
// }
// console.log(dobrar(5)); // Resultado: 10
// 2: Crie uma função saudacao que receba um nome (string) e retorne "Olá, <nome>".
// function saudacao(nome: string): string {
//     return `Olá, ${nome}`;
// }
// console.log(saudacao("Reuel")); // Resultado: Olá, Reuel
// 3: Defina um array de strings com nomes de amigos e percorra ele com forEach.
// const amigos: string[] = ["Reuel", "Maria", "João"];
// amigos.forEach(amigo => {
//     console.log(saudacao(amigo));
// });
// console.log(amigos); // Resultado: ["Reuel", "Maria", "João"]
// // 4: Crie uma tupla que armazene [nome, idade].
// const pessoa: [string, number] = ["Reuel", 25];
// console.log(pessoa); // Resultado: ["Reuel", 25]
// // 5; Crie um enum para representar níveis de acesso: ADMIN, USER, GUEST.
// enum NivelAcesso {
//     ADMIN,
//     USER,
//     GUEST
// }
// console.log(NivelAcesso.ADMIN); // Resultado: 0
// console.log(NivelAcesso.USER); // Resultado: 1
// console.log(NivelAcesso.GUEST); // Resultado: 2
//6; Crie um objeto pessoa com propriedades tipadas (nome, idade, email).
// const pessoa: { nome: string; idade: number; email: string } = {
//     nome: "Reuel",
//     idade: 25,
//     email: "reuel@example.com"
// };
// console.log(pessoa);
// Configure um projeto com tsconfig.json que tenha src/ e dist/.
