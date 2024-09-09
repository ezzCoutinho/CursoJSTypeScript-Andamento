// Array<T> -> recebe um tipo, type alias, inserction type, uniom type...
// Promise<T> -> recebe um tipo, type alias, inserction type, uniom type...
// São genéricos padrões em typeScript.

type MeuTipo = number;

const arrayNumeros: Array<MeuTipo> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arrayNumeros);

async function promiseAsync(): Promise<MeuTipo> {
  return 1;
}
promiseAsync().then((resultado) => console.log(resultado + 1));

function minhaPromise(): Promise<MeuTipo> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 2000);
  });
}

minhaPromise().then((resultado) => console.log(resultado + 1));
