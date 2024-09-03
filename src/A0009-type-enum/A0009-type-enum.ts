// enum -> Define uma forma de conjuntos em constantes.
enum Cores {
  Vermelho = 10, //0 por padrão.
  Azul = 100, //1
  Amarelo = 200, //2
}

enum Cores {
  roxo = 'roxo', // indice c/string
  rosa = 'rosa', // string
  lilas = 201, // back number
  branco, // automatico
}

// console.log(Cores.Vermelho);
// console.log(Cores[100]);
// console.log(Cores);

// Tipos de enum, são bons.
export default function escolhaCor(cor: Cores): void {
  console.log(Cores[cor]);
}

escolhaCor(100);
