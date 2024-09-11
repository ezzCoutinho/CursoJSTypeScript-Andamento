/* eslint-disable @typescript-eslint/no-namespace */
// modulo é um namespace;
// ele não precisa ser executado;
// cria qualquer coisa dentro dele
// ele tem o seu escopo protegido (closure), podendo export,
// usando anotação de ponto "Namespace.Pessoa"

namespace MeuNamespace {
  export const nome: string = 'Luiz';

  export class PessoaDoNamespace {
    constructor(public nome: string) {}
  }

  const pessoa = new PessoaDoNamespace(nome);
  console.log(pessoa);

  export namespace OutroNamespace {
    export const sobrenome: string = 'Otávio';
    export class PessoaOutroNamespace {
      constructor(
        public nome: string,
        public sobrenome: string,
      ) {}
      nomeCompleto(): string {
        return `${this.nome} ${this.sobrenome}`;
      }
    }
  }

  export const pessoa2 = new OutroNamespace.PessoaOutroNamespace(
    nome,
    OutroNamespace.sobrenome,
  );
}

const nome = MeuNamespace.nome;
const pessoa = new MeuNamespace.PessoaDoNamespace(nome);
console.log(pessoa);

const pessoa2 = MeuNamespace.pessoa2;
console.log(pessoa2.nomeCompleto());
