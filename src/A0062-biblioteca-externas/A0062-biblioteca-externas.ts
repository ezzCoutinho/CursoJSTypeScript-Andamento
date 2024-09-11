// intalar modules da lib node, requer tipagem para ser acessadas,
// no typeScritp; npm install validator @types/validaor --save-dev

import validator from 'validator';

import _ from 'lodash';

const email: string = 'lammerlopes@hotmail.com';

console.log(validator.isEmail(email));
console.log(_.clone(email));
