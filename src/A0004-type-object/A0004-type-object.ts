const objetoA: {
  readonly chaveA: string;
  chaveB: string;
  chaveC?: string;
  [key: string]: unknown; // index Signature
} = {
  chaveA: 'ValorA',
  chaveB: 'ValorB',
};

objetoA.chaveC = 'Nova chave';
objetoA.chaveD = 'Chave D';
console.log(objetoA);
