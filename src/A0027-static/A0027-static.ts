// Métodos static -> não precisam de instanciamento
// não trabalham com this.
// Atributos static -> podem ser valores padrão e são chamados
// por anotação de texto.
export class Pessoa {
  static idadePadrao = 0;
  static cpfPadrao = '000.000.000-00';
  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
    public _cpf: string,
  ) {}

  metodoNormal(): void {
    console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }

  //Factory Method
  static criaPessoa(nome: string, sobrenome: string): Pessoa {
    return new Pessoa(
      nome,
      sobrenome,
      Pessoa.idadePadrao,
      Pessoa.cpfPadrao,
    );
  }
}

const pessoa1 = new Pessoa(
  'Luiz',
  'Miranda',
  Pessoa.idadePadrao,
  Pessoa.cpfPadrao,
);
const pessoa2 = Pessoa.criaPessoa('Maria', 'Miranda');
console.log(pessoa1);
console.log(pessoa2);
pessoa1.metodoNormal();
