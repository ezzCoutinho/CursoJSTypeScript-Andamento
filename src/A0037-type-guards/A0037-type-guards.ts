// type guards -> Quando não inferimos um tipo, e inferimos o tipo
// pela a condicional, usando 'obj' in obj no caso de interface / type
// ou no valor de uma class obj instance of Aluno.
// switch precisa de um tipo no valor, tanto na inteface quanto na class.
export function add(a: unknown, b: unknown): number | string {
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  return `${a}${b}`;
}

console.log(add(true, false));

type Pessoa = { tipo: 'pessoa'; nome: string };
type Animal = { tipo: 'animal'; cor: string };

type AnimalOuPessoa = Pessoa | Animal;

export class Aluno implements Pessoa {
  tipo: 'pessoa' = 'pessoa';
  constructor(public nome: string) {}
}

function mostraNome(obj: AnimalOuPessoa): void {
  // if ('nome' in obj) console.log(obj.nome);
  // if (obj instanceof Aluno) console.log(obj.nome);
  switch (obj.tipo) {
    case 'animal':
      console.log('Olha, isso é um animal da cor:', obj.cor);
      return;
    case 'pessoa':
      console.log(obj.nome);
      return;
  }
}

mostraNome(new Aluno('Luiz'));
mostraNome({ tipo: 'animal', cor: 'Branca' });
