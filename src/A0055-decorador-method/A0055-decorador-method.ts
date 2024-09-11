// Alterando propriedade de um método ou assitir a propriedade de um método,
// ser genérico é servir para any
// PropertyDescriptr -> retorna um objeto

function decorator(
  classPrototype: any,
  nomeMetodo: string,
  descriptor: PropertyDescriptor,
): PropertyDescriptor | void {
  console.log(classPrototype);
  console.log(nomeMetodo);
  console.log(descriptor);
  return {
    value: function (...args: string[]) {
      return (args[0] =
        'HELLLLLLLLLLLLLO WORRRRRRRRRRRRRLD').toLocaleLowerCase();
    },
  };
}

export class UmaPessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
  ) {}

  @decorator
  metodo(msg: string): string {
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
