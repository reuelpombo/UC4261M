O que é encapsulamento? 
O encapsulamento é um dos pilares da Programação Orientada a Objetos (POO). Ele consiste em organizar os dados e os comportamentos de um objeto dentro de uma classe e controlar como outras partes do programa podem acessá-los.

Imagine uma conta bancária. O saldo faz parte dos dados internos da conta. Não seria adequado permitir que qualquer parte do programa alterasse esse saldo livremente. Em vez disso, a classe pode oferecer métodos, como depositar, sacar e consultarSaldo, para controlar como essas operações acontecem.

Assim, o encapsulamento ajuda a: 
Proteger os dados: evita alterações diretas e inadequadas.
Controlar o acesso: define quais informações e operações ficam disponíveis para outras partes do programa.
Organizar o código: reúne os dados e os métodos relacionados dentro da mesma classe.
Facilitar a manutenção: permite mudar detalhes internos sem necessariamente alterar a forma como outras partes do programa utilizam a classe.

Modificadores de acesso 
Em TypeScript, os modificadores de acesso ajudam a implementar o encapsulamento, definindo onde as propriedades e os métodos de uma classe podem ser utilizados.

Os três modificadores mais comuns são:

public: permite o acesso de qualquer lugar. É o modificador padrão quando nenhum outro é informado.
private: permite o acesso somente dentro da própria classe.
protected: permite o acesso dentro da própria classe e nas classes que herdam dela.

Modificador public
O modificador public permite que uma propriedade ou um método seja acessado de dentro da classe, de classes filhas e também de fora da classe, por meio de um objeto.

Como public é o padrão em TypeScript, não é obrigatório escrevê-lo explicitamente.

Quando usar public?
Use public quando uma informação ou ação deve estar disponível para o código que utiliza a classe, como métodos para apresentar dados ou executar ações.

Modificador private
O modificador private restringe o acesso a uma propriedade ou método à própria classe em que foi declarado. O código externo e as subclasses não podem acessar diretamente esse membro.


Exercícios para praticar
Exercício 1 --- public
Crie uma classe Livro com uma propriedade pública chamada titulo.
Crie um método público chamado exibirTitulo que mostre o título no console.
Instancie um objeto Livro.
Acesse a propriedade titulo e chame o método exibirTitulo por meio do objeto.



Exercício 2 --- private
Crie uma classe ContaBancaria com uma propriedade privada chamada saldo.
No construtor, receba um valor inicial para o saldo.
Crie um método público chamado consultarSaldo para mostrar o saldo.
Crie um método público chamado depositar que receba um valor e o acrescente ao saldo, desde que seja maior que zero.
Instancie uma conta e teste os métodos.
Tente acessar saldo diretamente pelo objeto. Observe o erro indicado pelo TypeScript.




Exercício 3 --- protected
Crie uma classe Veiculo com uma propriedade protegida chamada velocidade, iniciada em zero.
Crie uma subclasse Carro que herde de Veiculo.
Na classe Carro, crie um método público chamado acelerar que acrescente um valor à velocidade.
Crie também um método público chamado exibirVelocidade para mostrar a velocidade atual.
Instancie um Carro, acelere e exiba sua velocidade.
Tente acessar velocidade diretamente pelo objeto e observe o erro indicado pelo TypeScript.




Exercício 4 --- Comparando private e protected
Crie uma classe Conta com uma propriedade protected saldo e um método protected atualizarSaldo(valor: number) que acrescente o valor recebido ao saldo.
Crie uma subclasse ContaPoupanca com um método público aplicarJuros que utilize atualizarSaldo para acrescentar os juros.
Crie um método público para consultar o saldo.
Instancie ContaPoupanca e teste seus métodos.
Tente acessar saldo e atualizarSaldo diretamente pelo objeto. Observe o erro indicado pelo TypeScript.



Encapsulamento: organiza os dados e comportamentos de uma classe e controla como eles são acessados.
public: pode ser acessado de qualquer lugar.
private: só pode ser acessado dentro da classe em que foi declarado.
protected: pode ser acessado dentro da classe em que foi declarado e nas subclasses.
Escolher o modificador adequado ajuda a organizar as classes, proteger seus dados e definir quais operações ficam disponíveis para outras partes do programa.