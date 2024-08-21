// type-never, é never mesmo
export function criaErro(): never {
  throw new Error('Erro qualquer');
}

criaErro();
