"use strict";
// Exercício 1 --- public
// Crie uma classe Livro com uma propriedade pública chamada titulo.
// Crie um método público chamado exibirTitulo que mostre o título no console.
// Instancie um objeto Livro.
// Acesse a propriedade titulo e chame o método exibirTitulo por meio do objeto.
// 1. Criação da classe Livro com tipagem TypeScript
class Livro {
    constructor(titulo) {
        this.titulo = titulo;
    }
    // Método público com retorno vazio (void)
    exibirTitulo() {
        console.log(`O título do livro é: ${this.titulo}`);
    }
}
// 2. Instanciação de um objeto Livro
// 3. Acesso à propriedade titulo e chamada do método
console.log(meuLivro.titulo); // Acessando a propriedade diretamente
meuLivro.exibirTitulo(); // Chamando o método
