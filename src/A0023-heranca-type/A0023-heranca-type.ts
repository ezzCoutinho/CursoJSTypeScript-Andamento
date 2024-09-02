export class Pessoa {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
    private readonly idade: number,
    protected readonly cpf: string,
  ) {}

  public getIdade(): number {
    return this.idade;
  }

  public getCpf(): string {
    return this.cpf;
  }

  public getNomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }
}

export class Aluno extends Pessoa {
  public getNomeCompleto(): string {
    return `isto vem do Aluno${this.nome} ${this.sobrenome}`;
  }
}
export class Cliente extends Pessoa {
  public getNomeCompleto(): string {
    return `isto vem do Cliente${this.nome} ${this.sobrenome}`;
  }
}

const pessoa = new Pessoa('Luiz', 'Miranda', 30, '000.000.000-00');
const aluno = new Aluno('Luiz', 'Miranda', 30, '000.000.000-00');
const cliente = new Cliente('Luiz', 'Miranda', 30, '000.000.000-00');

console.log(pessoa.getIdade());
console.log(aluno);
console.log(cliente);
