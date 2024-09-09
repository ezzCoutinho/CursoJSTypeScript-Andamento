// Constraints -> quando um tipo pode ser qualquer coisa, e precisa
// no "máximo" algo que ligue a ela, a outro tipo.
// <O, K extends keyof O>

type ObterChaveFn = <O, K extends keyof O>(objeto: O, chave: K) => O[K];

const obterChave: ObterChaveFn = (objeto, chave) => objeto[chave];

const animal: { cor: string; vacina: Array<string>; idade: number } = {
  cor: 'Rosa',
  vacina: ['Vacina 1', 'Vacina 2'],
  idade: 8,
};

const vacina = obterChave(animal, 'vacina');
const cor = obterChave(animal, 'cor');
const idade = obterChave(animal, 'idade');

console.log(vacina, cor, idade);
