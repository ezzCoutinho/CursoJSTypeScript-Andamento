// importando javaScript no typeScript, no tsconfig, ativar o AllowJS: true
import { soma } from './soma';

const result = soma(55, 45) as number; // type assertion

console.log(result);
