// cada biblioteca vai ser estendida do seu jeito.
// declare estende o tipo de uma lib, sem alterar ela.
declare namespace _ {
  interface LoDashStatic {
    mul(array: number[]): number;
  }
}

declare let global: typeof globalThis & {
  MINHAGLOBAL: string;
};
