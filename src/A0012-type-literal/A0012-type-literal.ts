//Literal-types -> é usar o valor de uma váriavel, let,
//parâmetro de função, chave de objeto ou
//indice de Array como tipo.

let x = 10; // eslint-disable-line
x = 0b1010;

const y = 10; //sub-tipo de number, ELA É DO TIPO 10

//transformando let em imutável.
let a: 10 = 10; // eslint-disable-line
let b = 10 as const; // eslint-disable-line

//Todo objeto e array são mutáveis.
const person = {
  name: 'Luiz' as const,
  lastname: 'Otávio' as const,
  age: 30,
};

person.name = 'Matheus';
person.lastname = 'Lopes';
person.age = 24;
// console.log(person);

function escolhaCor(cor: 'Vermelho' | 'Verde' | 'Azul') {
  return cor;
}

console.log(escolhaCor('Vermelho'));

// Module-mode
export default 1;
