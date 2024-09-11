// assistindo os parâmetros da class / método
function decorador(
  classPrototype: any,
  nomeMetodo: string | symbol,
  index: number,
): any {
  console.log(classPrototype);
  console.log(nomeMetodo);
  console.log(index);
  return 'qualquer coisa';
}

export class UmaPessoa {
  nome: string;
  sobrenome: string;
  idade: number;
  constructor(
    @decorador nome: string,
    @decorador sobrenome: string,
    @decorador idade: number,
  ) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }

  metodo(@decorador msg: string): string {
    return `${this.nome} ${this.sobrenome} ${msg}`;
  }

  get nomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }

  set nomeCompleto(valor: string) {
    const palvras = valor.split(/\s+/g);
    const primeiroNome = palvras.shift();
    if (!primeiroNome) return;
    this.nome = primeiroNome;
    this.sobrenome = palvras.join(' ');
  }
}
const pessoa = new UmaPessoa('Luiz', 'Otávio', 30);
const metodo = pessoa.metodo('Hello World!');
console.log(metodo);
