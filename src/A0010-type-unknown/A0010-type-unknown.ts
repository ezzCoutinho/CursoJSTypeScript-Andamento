// unknown é igual ao any, só que mais seguro. É pai de todos os types

let x: any;

x = 100;
x = 'Luiz';
x = 900;
x = '10';
const y = 800;
// Concatenação
console.log(x + y);

let xU: unknown;

xU = 100;
xU = 'Luiz';
xU = 900;
xU = '10';
const yU = 800;

if (typeof xU === 'number') console.log(xU + yU);
