// Adicionando o constraints a um type
// Criando outro decorador com factory e hosting em cima de outro...
type Constraints = {
  new (...args: any[]): any;
};
function inverteNomeECor(param1: string, param2: string) {
  return function <T extends Constraints>(target: T): T {
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

function outroDecorador(param1: string, param2: string) {
  return function <T extends Constraints>(target: T): T {
    return class extends target {
      nome: string;
      cor: string;

      constructor(...args: any[]) {
        super(...args);
        this.nome = param1;
        this.cor = param2;
      }
    };
  };
}

@outroDecorador('Mac Allister', 'Frajola')
@inverteNomeECor('Valor 1', 'Valor 2')
export class Animal {
  constructor(
    public nome: string,
    public cor: string,
  ) {
    console.log('sou a clase');
  }

  mia(): void {
    console.log(`${this.nome} está miando, querendo ração...`);
  }
}

const animal = new Animal('', 'Purple');
animal.mia();
console.log(animal.cor);
