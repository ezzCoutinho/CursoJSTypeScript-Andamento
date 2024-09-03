// Singleton - GoF | Factory Method -GoF
// Singleton -> deixa o constructor privado
// não se pode ter mais de uma instância na classe.
// Factory Method -> usa métodos static com instancias...
export class DataBase {
  private static database: DataBase;

  private constructor(
    private host: string,
    private user: string,
    private password: string,
  ) {}

  static getDataBase(
    host: string,
    user: string,
    password: string,
  ): DataBase {
    if (DataBase.database) {
      console.log('Retornando instância já criada.');
      return DataBase.database;
    }
    DataBase.database = new DataBase(host, user, password);
    console.log('Criando nova instância.');
    return DataBase.database;
  }

  connect(): void {
    console.log(
      `Conectado: ${this.host}, ${this.user}, ${this.password}.`,
    );
  }
}

const database1 = DataBase.getDataBase('localhost', 'root', 'admin');
database1.connect();
const database2 = DataBase.getDataBase('localhost', 'root', 'admin');
database2.connect();
const database3 = DataBase.getDataBase('localhost', 'root', 'admin');
database3.connect();
const database4 = DataBase.getDataBase('localhost', 'root', 'admin');
database4.connect();
