export class Pessoa {
  constructor(
    private nome: string,
    private sobrenome: string,
    private idade: number,
    private _cpf: string,
  ) {
    this.cpf = _cpf; // sette sendo chamado.
  }

  get cpf(): string {
    console.log('GETTER sendo CHAMADO');
    return this._cpf.replace(/\D/g, '');
  }

  set cpf(valor: string) {
    console.log('SETTER sendo CHAMADO');
    this._cpf = valor;
  }
}

const pessoa = new Pessoa('Luiz', 'Miranda', 30, '000.000.000-00');
pessoa.cpf = '214.644.123-77';
console.log(pessoa.cpf);
