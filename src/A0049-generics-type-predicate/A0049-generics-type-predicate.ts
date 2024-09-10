// typePredicate -> só quando o retorno da função for boolean
// quando definimos um parâmetro is tipo,
// no retorno de uma função.

export function isNumber(value: unknown): value is number {
  return typeof value === 'number';
}

export function soma<T, U>(...args: T[] | U[]): number {
  const retorno = args.reduce((acumulador, valor) => {
    if (isNumber(acumulador) && isNumber(valor)) {
      return acumulador + valor;
    }

    return acumulador;
  }, 0);

  return retorno;
}

console.log(soma('123', 1));
console.log(soma(1, 2, 'A', 'B', 1));
console.log(soma('a', 'b', 'c'));
