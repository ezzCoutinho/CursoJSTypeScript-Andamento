// Decoradores -> se passam por objetos, mas no final são decoradores
// que podem decorar("alterar") classes. @ (hosting) em cima da class deixa o
// decarador responsável por ela.

@decorator
export class Animal {
  constructor(
    public nome: string,
    public cor: string,
  ) {}
}

function decorator<T extends new (...args: any[]) => any>(target: T): T {
  return class extends target {
    nome: string;
    cor: string;

    constructor(...args: any[]) {
      super(...args);
      this.nome = args[0] = 'Macaco';
      this.cor = this.inverte(args[1]);
    }

    inverte(valor: string): string {
      return valor.split('').reverse().join();
    }
  };
}

const animal = new Animal('', 'Purple');
console.log(animal);
