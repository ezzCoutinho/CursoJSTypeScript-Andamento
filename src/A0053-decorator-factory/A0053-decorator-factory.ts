// Colocando parâmetros em funções decoradoras -> precisamos tornar o
// decorador em uma função anonima e retorna ele dentro de outra
// função.

function inverteNomeECor(param1: string, param2: string) {
  return function <T extends new (...args: any[]) => any>(target: T): T {
    console.log('Sou o decorador e recebi', target);

    return class extends target {
      nome: string;
      cor: string;

      constructor(...args: any[]) {
        super(...args);
        this.nome = args[0] = 'Macaco';
        this.cor = this.inverte(args[1]);
      }

      inverte(valor: string): string {
        return valor.split('').reverse().join() + ` ${param1}  ${param2}`;
      }
    };
  };
}

@inverteNomeECor('Valor 1', 'Valor 2')
export class Animal {
  constructor(
    public nome: string,
    public cor: string,
  ) {
    console.log('sou a clase');
  }
}

const animal = new Animal('', 'Purple');
console.log(animal);
