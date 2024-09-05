// declaration inteface -> quando uma interface é criada varias vezes,
// só funciona em interface, não em type alias.
interface Pessoa {
  nome: string;
}

interface Pessoa {
  readonly sobrenome: string;
}

interface Pessoa {
  readonly endereco: readonly string[];
}

interface Pessoa {
  readonly idade?: number;
}

const pessoa: Pessoa = {
  nome: 'Luiz',
  sobrenome: 'Otávio',
  endereco: ['Av. Brasil'],
};

console.log(pessoa);

//module mode
export default 0;
