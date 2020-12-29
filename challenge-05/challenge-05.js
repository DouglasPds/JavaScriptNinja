/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
// ?
var pessoa = ['Douglas', 22, true, false, null, undefined, 0]

console.log(pessoa);

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function pes(valor) {
	return valor;
}

console.log(pes(pessoa));

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(pes(pessoa)[1 ]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function para(vetor,valor) {
	return vetor[valor];
}

console.log(para(pessoa,0));

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var carro = ['honda', 4, 'preto fosco', true, 'lindão']

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(para(carro,0));
console.log(para(carro,1));
console.log(para(carro,2));
console.log(para(carro,3));
console.log(para(carro,4));

/*	
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/ 

function book(nameBook) {
	var livro = {
		'A lenda de Ruff Ghanor': {
			quantidadePaginas: 267,
			autor: 'Leonel',
			editora: 'Books Nerd'
		},
		'A lenda de Ruff Ghanor volume 2': {
			quantidadePaginas: 158,
			autor: 'Deive Pazos',
			editora: 'Nerd Books'
		},
		'Ozobb': {
			quantidadePaginas: 345,
			autor: 'Deive e Leonel',
			editora: 'Jovem Nerd'
		}
	};

	return nameBook === undefined ? livro : livro[nameBook];
	
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log('O livro A lenda de Ruff Ghanor volume 2 tem ' + book('A lenda de Ruff Ghanor volume 2').quantidadePaginas + ' páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro A lenda de Ruff Ghanor volume 2 é ' + book('A lenda de Ruff Ghanor volume 2')['autor'] + '.');

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro A lenda de Ruff Ghanor volume 2 foi publicado pela editora ' + book('A lenda de Ruff Ghanor volume 2').editora + '.');
