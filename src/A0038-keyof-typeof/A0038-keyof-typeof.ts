// typeof -> pega o tipo de um objeto literal para um type alias ou inteface
// keyof -> pega as chaves do typeof de um typealias ou inteface
type CoresObj = typeof coresObj;
type CoresDasChaves = keyof CoresObj;

const coresObj = {
  vermelho: 'red',
  verde: 'green',
  azul: 'blue',
  roxo: 'purple',
  cinza: 'grey',
  branca: 'white',
};

function traduzirCor(cor: CoresDasChaves, cores: CoresObj): string {
  return cores[cor];
}

console.log(traduzirCor('branca', coresObj));
console.log(traduzirCor('roxo', coresObj));
console.log(traduzirCor('branca', coresObj));
