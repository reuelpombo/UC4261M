"use strict";
// ./ crie um array que contem X notas 
// Depois calcule a media destas notas e mostre no temrinal
// lembrando a media se calcula somando todos os numeros e dividindo o resultado pela quantidade de numeros 
// dica para somar o array com as notas use um for ./
// const notas = [10, 15, 9];
// let soma = 0;
// for (let i = 0; i < notas.length; i++) {
//     soma += notas[i];
// }
// console.log("soma das nota: " + soma);
// const media = soma / notas.length;
// console.log("media das notas: " + media);
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

// Objetos em typescript 
// let pessoa ={

//     nome: "Reuel",
//     idade: 25,
//     email: "reuel@example.com"
// }
// pessoa.nome = "Reuel"
// pessoa.idade = 30
// pessoa.email = "reuel.rickard@example.com"
// console.log(pessoa)


// crie dois objetos representando pessoas (coloque nomes diferentes para os objetos)
// esses objetos devem ter :nome,cidade, emprego sendo que emprego deve ser um atributo opcional
// depois faça um if que mostre 2 frases diferentes dependendo se o a pessoa ta empregada ou não está pode ser feito com boolean "FULANO da cidade tal está trabalhando ou ciclano de tal cidade está desempregado "
// nome string , cidade string , emprego boolean
// Criando o primeiro objeto (empregado)
let pessoa1 = {
    nome: "Lucas",
    cidade: "Curitiba",
    emprego: true // Atributo do tipo boolean
};

// Criando o segundo objeto (sem a propriedade de emprego/desempregado)
let pessoa2 = {
    nome: "Beatriz",
    cidade: "Salvador"
    // emprego não foi atribuído (opcional)
};

// Verificação para pessoa 1
if (pessoa1.emprego) {
    console.log(`${pessoa1.nome} da cidade de ${pessoa1.cidade} está trabalhando.`);
} else {
    console.log(`${pessoa2.nome} da cidade de ${pessoa1.cidade} está desempregado(a).`);
}

// Verificação para pessoa 2
if (pessoa2.emprego) {
    console.log(`${pessoa2.nome} da cidade de ${pessoa2.cidade} está trabalhando.`);
} else {
    console.log(`${pessoa2.nome} da cidade de ${pessoa2.cidade} está desempregado(a).`);
}