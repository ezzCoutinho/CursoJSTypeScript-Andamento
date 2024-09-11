/* GENÉRICOS PADRÕES DO TYPESCRIPT */
// Record -> em objeto literal, tipo da chave e valor da chave
// Required -> quando um tipo ou inteface tem objetos obrigatorios
// Partial -> chaves de objetos são opcionais: tipos | undefined
// Readonly -> não se altera as chaves do objeto
// Pick -> escolhe apenas as chaves.
// Exclude -> exclui todos os tipos de ABC que estão em CDE
// Extract -> pega apenas os tipos que estão em ABC e CDE.
const objeto1: Record<string, string | number> = {
  nome: 'Luiz',
  sobrenome: 'Otávio',
  idade: 30,
};

type PessoaProtocol = {
  nome?: string;
  sobrenome?: string;
  idade?: number;
};

type PessoaRequired = Required<PessoaProtocol>;

const objeto2: PessoaRequired = {
  nome: 'Luiz',
  sobrenome: 'Otávio',
  idade: 30,
};

type PessoaPartial = Partial<PessoaRequired>;

const objeto3: PessoaPartial = {
  nome: 'Luiz',
  idade: 30,
};

type PessoaReadOnly = Readonly<PessoaRequired>;

const objeto4: PessoaReadOnly = {
  nome: 'Luiz',
  sobrenome: 'Otávio',
  idade: 30,
};
// objeto4.nome = 'Matheus';

type PessoaPick = Pick<PessoaRequired, 'nome' | 'idade'>;

const objeto5: PessoaPick = {
  nome: 'Luiz',
  idade: 30,
};

type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';
type tipoExclude = Exclude<ABC, CDE>;
type tipoExtract = Extract<ABC, CDE>;

// Exemplo hardcode;
type AccountMongo = {
  _id: string;
  nome: string;
  idade: number;
  sobrenome: string;
};

type AccountApi = {
  id: string;
  nome: string;
  idade: number;
  sobrenome: string;
};

// easycode
type AccountApiE = Pick<
  AccountMongo,
  Exclude<keyof AccountMongo, '_id'>
> & {
  id: string;
};

const accountMongo: AccountMongo = {
  _id: 'asjhudaoiwhd-02134',
  nome: 'Luiz',
  idade: 30,
  sobrenome: 'Otávio',
};

function mapAccount(accountMongo: AccountMongo): AccountApi {
  const { _id, ...accountData } = accountMongo;
  return { ...accountData, id: _id };
}

const accountApi = mapAccount(accountMongo);
console.log(accountApi);

// module mode
export default 0;
console.log(objeto1, objeto2, objeto3, objeto4, objeto5);
