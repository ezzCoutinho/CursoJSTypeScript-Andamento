// <generics> -> Quando não sabemos oq iremos receber, mas será usado
// como inferimento de tipo.
// <QUALQUERCOISA> -> recebendo qualquer coisa dentro, é apenas um tipo
// "desconhecido", pode ser usado em qualquer local.

type FilterCallback<U> = (
  value: U,
  index?: number,
  array?: U[],
) => boolean;

export function myFilter<T>(
  array: T[],
  callbackfn: FilterCallback<T>,
): T[] {
  const novoArray = [];
  for (let i = 0; i < array.length; i++) {
    if (callbackfn(array[i])) {
      novoArray.push(array[i]);
    }
  }

  return novoArray;
}

const arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrayString = ['Hello', 'World'];
console.log(arrayString);

const arrayFiltradoOriginal = arrayNumbers.filter((value) => value < 5);
console.log(arrayFiltradoOriginal);

const arrayFiltrado = myFilter(arrayNumbers, (value) => value < 5);
console.log(arrayFiltrado);
