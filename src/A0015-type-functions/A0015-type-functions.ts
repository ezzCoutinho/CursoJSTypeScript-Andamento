// tipo de função que tem tipo string no "item" e no retorno dela.
type FuncaoCallback = (item: string) => string;

function mapString( // função chamada mapString.
  array: Array<string>, // parametro "array" com tipo stringArray.
  callbackfn: FuncaoCallback, // parametro "cllbckfn" com tipo de função.
): Array<string> {
  // retorno dessa função absoluto é um stringArray
  const newArray: Array<string> = []; // criando um array vazio com tipo stringArray

  for (let i = 0; i < array.length; i++) {
    // for classico.
    const item = array[i];
    newArray.push(callbackfn(item)); // adiciona no final do array vazio,
    //recebendo o array e o indice.
  }

  return newArray; // retorna o array
}

const abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g']; // arraystring
const abcMap = mapString(abc, (item) => item.toUpperCase());

console.log(abc);
console.log(abcMap);

//Module mode
export default 1;
