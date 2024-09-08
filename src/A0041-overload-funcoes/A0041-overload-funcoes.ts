// overload -> quando um type alias, tem mais de 1 tipo de função inferida.
// quando uma função se comporta diferente, conforme a quantidade de parâmetros
type Adder = {
  (x: number): number;
  (x: number, y: number): number;
  (...arg: number[]): number;
};

const adder: Adder = (x: number, y?: number, ...args: number[]) => {
  if (args.length > 0) {
    return args.reduce((s, v) => s + v, 0) + x + (y || 0);
  }
  return x + (y || 0);
};

console.log(adder(1, 1, 5));
