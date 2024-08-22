// union type -> | -> OU.  ainda é mais usado que o intersection type
// intersection type -> & -> AND

type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };

// union type, tem que haver 1, conduta muito relaxa(não recomendável)
type PessoaOu = TemNome | TemSobrenome | TemIdade;
const pessoaOu: PessoaOu = {
  nome: 'Joao',
};
// console.log(pessoaOu);

// intersction type
type PessoaAnd = TemNome & TemSobrenome & TemIdade;
const pessoaAnd: PessoaAnd = {
  nome: 'Matheus',
  sobrenome: 'Silva',
  idade: 44,
};
console.log(pessoaAnd);

// tipos como conjuntos
type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'D' | 'A';
type Intersecao = AB & AC & AD;

//Module mode
export default 1;
