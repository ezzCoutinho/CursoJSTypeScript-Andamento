export class Empresa {
  // maneira "rápida" atalho.
  constructor(
    // public acessível dentro da classe, em subclasses e fora da classe.
    public readonly nome: string,
    // protected acessível dentro da classe e subclasses, não fora dela.
    private readonly cnpj: string,
    // private acessível somente dentro da classe, sub class e fora dela não.
    protected readonly colaboradores: Colaborador[] = [],
  ) {}
  addColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  showColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

export class Udemy extends Empresa {
  constructor() {
    super('Berra Bode', '96.476.321/0001-36');
  }

  popColaborador(): Colaborador | null {
    const colaboradores = this.colaboradores;
    if (colaboradores) {
      colaboradores.pop();
    }

    return null;
  }
}
// usando ela como tipo.
export class Colaborador {
  // maneira rapida "atalho".
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa1 = new Udemy();
const colaboradores1 = new Colaborador('Luiz', 'Otávio');
const colaboradores2 = new Colaborador('Maria', 'Miranda');
const colaboradores3 = new Colaborador('João', 'Vieira');
empresa1.addColaborador(colaboradores1);
empresa1.addColaborador(colaboradores2);
empresa1.addColaborador(colaboradores3);
empresa1.addColaborador({
  nome: 'Luiz',
  sobrenome: 'Miranda',
});
empresa1.popColaborador();

console.log();
console.log(empresa1);
