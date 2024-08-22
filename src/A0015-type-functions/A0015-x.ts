//module mode
export default 1;

type Qualquer = any;

const soma = (x: number, y: number) => {
  return x + y;
};

// console.log(soma(3, 2));

function qualquer(nome: Qualquer): Qualquer {
  return nome;
}

// console.log(qualquer('Matheus'));

type FuncaoOp = (op1: string, op2: string) => string;
const saudacao: FuncaoOp = (nome, sobrenome): string => {
  return `Olá ${nome} ${sobrenome}`;
};
console.log(saudacao('Luiz', 'Otávio'));
