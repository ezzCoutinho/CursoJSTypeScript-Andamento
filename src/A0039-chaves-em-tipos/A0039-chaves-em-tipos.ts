// chaves em tipos -> indêntica a deep copy, onde um type
// passa como tipo de uma chave para outro tipo

type Veiculo = {
  marca: string;
  ano: number;
};

type Car = {
  brand: Veiculo['marca'];
  year: Veiculo['ano'];
};

const carro: Car = {
  brand: 'Volswagen',
  year: 2003,
};

console.log(carro);
