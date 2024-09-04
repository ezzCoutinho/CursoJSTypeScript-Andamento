// interface -> é a mesma coisa do type alias, ela modela "formulas",
// não precisa de sinal de atribuição em uma interface.
// pode fazer extends de varias outras interface. Porém, type alias,
// não tem restrição.

type TipoNome = {
  nome: string;
};

interface TipoSobrenome {
  sobrenome: string;
}

interface TipoNomeCompleto {
  nomeCompleto(): string;
}

// interseção com type alias
type TipoPessoa = TipoNome & TipoSobrenome & TipoNomeCompleto;

// extensão com interface.
interface TipoPessoa2 extends TipoNome, TipoSobrenome, TipoNomeCompleto {}

export class Pessoa implements TipoPessoa2 {
  constructor(
    public nome: string,
    public sobrenome: string,
  ) {}

  public nomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }
}

const pessoaObj: TipoPessoa = {
  nome: 'Luiz',
  sobrenome: 'Otávio',
  nomeCompleto() {
    return `${this.nome} ${this.sobrenome}`;
  },
};

const pessoa = new Pessoa('Luiz', 'Otávio');

console.log(pessoa.nomeCompleto());
console.log(pessoaObj.nomeCompleto());
