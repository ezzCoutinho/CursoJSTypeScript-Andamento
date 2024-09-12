// estender tipos eme modulos de terceiro -> criando
// um novo tipo e adicionando a uma lib de terceiros.

import _ from './modulo';

const array: number[] = [100, 200, 300, 400];

console.log(global.MINHAGLOBAL);

console.log(_.sum(array));
console.log(_.min(array));
console.log(_.max(array));
console.log(_.mean(array));
console.log(_.mul(array));
