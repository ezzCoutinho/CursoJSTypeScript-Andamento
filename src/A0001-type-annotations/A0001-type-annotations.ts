/* eslint-disable */

// Tipos básicos (aqui ocorre inferência de tipos)
let nome: string = 'Luiz'; // Qualquer tipo de strings: '' "" ``
let idade: number = 30; // 10, 1.57, -5.55, 0xf00d, 0b1010, 0o7744
let adulto: boolean = true; // true ou false
let simbolo: symbol = Symbol('qualquer-symbol'); // symbol
// let big: bigint = 10n; //bigint

// Arrays type annotations
let arrayDeNumeros: Array<number> = [1,2,3];
let arrayDeNumeros2: number[] = [1,2,3];
let arrayDeString: Array<string> = ['Luiz', 'Otávio'];
let arrayDeString2: string[] = ['Luiz', 'Otávio'];

// Objetos type annotations
let pessoa: {nome: string, idade: number, adulto?: boolean} = {
  idade: 38,
  nome: 'Luiz Otávio',
}

// Funções type annotations
function multiplica(x: number, y:number): number {
  return x * y;
}

export const soma: (x: number, y: number) => number = (x, y) => x + y;

