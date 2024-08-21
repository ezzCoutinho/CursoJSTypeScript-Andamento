// Tipo de Retorno:
// Como você define o tipo de retorno de uma função que soma dois números e retorna o resultado?
export const soma: (x: number, y: number) => number = (x, y) => x + y;

// Parâmetros Anotados:
// Como você anotaria os tipos de parâmetros em uma função que recebe um nome (string) e uma idade (number) e retorna uma saudação?
const saudacao: (nome: string, idade: number) => string = (nome, idade) =>
  `Olá meu nome é: ${nome}, tenho ${idade} anos de idade`;

// Função com Objeto:
//Como você criaria uma função que aceita um objeto como argumento, onde o objeto possui as propriedades id (número) e nome (string)?

const objFnct: (usuario: { id: number; nome: string }) => string = (usuario) =>
  `Meu id é: ${usuario.id} e meu nome é: ${usuario.nome}`;
console.log(objFnct({ id: 34, nome: 'Math' }));
