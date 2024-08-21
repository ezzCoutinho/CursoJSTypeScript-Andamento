// Type Alias -> cria tipos com apelidos.
type Idade = number;
type Pessoa = {
  nome: string;
  idade: Idade;
  salario: number;
  corPreferida?: string;
};

// enum types with union types
type CorRGB = 'Vermelho' | 'Verde' | 'Blue';
type CorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto';
type CorPreferida = CorRGB | CorCMYK;

const pessoa: Pessoa = {
  nome: 'Luiz',
  idade: 30,
  salario: 200_000, // 200000
};

function setCorPreferida(person: Pessoa, color: CorPreferida): Pessoa {
  return { ...person, corPreferida: color };
}

console.log(setCorPreferida(pessoa, 'Amarelo'));

//Module mode
export default 1;
