// generecis -> funcionam em intersection

export function unirObjetos<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

const obj1 = { chave1: 'valor 1' };
const obj2 = { chave2: 'valor 2' };
const uniao = unirObjetos(obj1, obj2);

console.log(uniao);
