// Encademento opcional e Operador de coalescência nula
// encademento opcional - > evita muitas condições, pergunta se um obj pode]
// ser chamado "obj'?'", funciona para qualquer objeto.

// operador de coalescência - > verifica o operador a esquerda, retornando
// null ou undefined, caso o valor dele seja null || undefined
//

// ? se, ?? se não
// substituindo condicionais.

type Documento = {
  titulo: string;
  texto: string;
  data: Date;
};

const documento: Documento = {
  titulo: 'O titulo',
  texto: 'O texto',
  data: new Date(),
};

console.log(documento.data?.toDateString() ?? 'ixi não existe data.');
