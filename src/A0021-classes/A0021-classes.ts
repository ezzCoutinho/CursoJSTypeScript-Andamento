export class Empresa {
  // maneira longa.
  public readonly nome: string;
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  addColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  showColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
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

const empresa1 = new Empresa('Berra Bode', '96.476.321/0001-36');
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
empresa1.showColaboradores();
