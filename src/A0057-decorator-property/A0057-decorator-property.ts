// decorando os atributos("propriedades") de uma class

function decorador(classPrototype: any, nome: string | symbol): any {
  let valorPropriedade: any;
  return {
    get: () => valorPropriedade,
    set: (valor: any) => {
      if (typeof valor !== 'string') {
        return console.log(`O decorador é um número.`);
      }
      valorPropriedade = valor.split('').reverse();
    },
  };
}

export class UmaPessoa {
  @decorador
  _nome: string;
  @decorador
  _sobrenome: string;
  @decorador
  idade: number;
  constructor(nome: string, sobrenome: string, idade: number) {
    this._nome = nome;
    this._sobrenome = sobrenome;
    this.idade = idade;
  }

  metodo(msg: string): string {
    return `${this._nome} ${this._sobrenome} ${msg}`;
  }

  get nomeCompleto(): string {
    return `${this._nome} ${this._sobrenome}`;
  }

  set nomeCompleto(valor: string) {
    const palvras = valor.split(/\s+/g);
    const primeiroNome = palvras.shift();
    if (!primeiroNome) return;
    this._nome = primeiroNome;
    this._sobrenome = palvras.join(' ');
  }
}
const pessoa = new UmaPessoa('Luiz', 'Otávio', 30);
const metodo = pessoa.metodo('Hello World!');
console.log(metodo);
