// tupla
// cada indice tem o seu tipo
//                      0        1       2        3
const dadosClientes1: readonly [number, string] = [1, 'Luiz'];
const dadosClientes2: [number, string, number, string] = [
  1,
  'Luiz',
  45,
  'Carlos',
];
const dadosClientes3: [number, string, number, unknown?] = [1, 'Luiz', 45];
const dadosClientes4: [number, string, number, ...string[]] = [1, 'Luiz', 45];

// dadosClientes1[0] = 366;
// dadosClientes1[1] = 'Otávio';
dadosClientes3[3] = 4;
// dadosClientes1.push('Flamengooo');

console.log(dadosClientes1);
console.log(dadosClientes2);
console.log(dadosClientes3);
console.log(dadosClientes4);

// Arrays com readonly
export const arraycomum: readonly string[] = ['Luiz', 'Otávio'];

export const arrayonly: ReadonlyArray<string> = ['Luiz', 'Otávio'];

console.log(arraycomum);
console.log(arrayonly);
