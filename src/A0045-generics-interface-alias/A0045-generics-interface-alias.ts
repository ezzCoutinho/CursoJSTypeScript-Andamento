// interface & alias -> pode haver tipos genericos <>, até mais de um
// podendo ser atribuido nela, ou na tipagem dela (na const...).

interface PessoProcotolo<T = string, U = number> {
  nome: T;
  sobrenome: T;
  idade: U;
}

type PessoProcotolo2<T = string, U = number> = {
  nome: T;
  sobrenome: T;
  idade: U;
};

const aluno3: PessoProcotolo = {
  nome: 'Luiz',
  sobrenome: 'Otávio',
  idade: 30,
};

const aluno2: PessoProcotolo2<number, string> = {
  nome: 123,
  sobrenome: 456,
  idade: '30',
};

const aluno: PessoProcotolo<string, number> = {
  nome: 'Luiz',
  sobrenome: 'Otávio Miranda',
  idade: 30,
};

console.log(aluno3, aluno2, aluno);
