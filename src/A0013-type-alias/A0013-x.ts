type Nome = string;
type Sobrenome = string;
type Idade = number;

type Pessoa = {
  nome: Nome;
  sobrenome: Sobrenome;
  idade: Idade;
  carroPreferido?: string;
};

const pessoa: Pessoa = {
  nome: 'Matheus',
  sobrenome: 'Coutinho',
  idade: 24,
};

type carroPreferido = 'Santana' | 'Ferrari F-40';

function setCorPreferida(pessoa: Pessoa, teste: carroPreferido): Pessoa {
  return { ...pessoa, carroPreferido: teste };
}

console.log(setCorPreferida(pessoa, 'Ferrari F-40'));

//Module mode
export default 1;
