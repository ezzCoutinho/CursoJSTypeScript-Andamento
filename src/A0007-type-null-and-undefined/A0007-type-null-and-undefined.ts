let x;

if (typeof x === 'undefined') x = 20;
console.log(x * 20);

export function createPerson(
  firstName: string,
  lastName?: string,
): {
  //type annotation
  firstName: string;
  lastName?: string;
} {
  //corpo da função
  return {
    firstName,
    lastName,
  };
}

export function squareOf(x: any) {
  if (typeof x === 'number') return x * x;
  return null;
}

const squareOfTwoNumber = squareOf(4);

// null é um valor primitivo que representa a ausência intencional de qualquer
// objeto ou valor.
if (squareOfTwoNumber === null) {
  console.log(`Conta inválida`);
} else {
  console.log(squareOfTwoNumber * 100);
}
