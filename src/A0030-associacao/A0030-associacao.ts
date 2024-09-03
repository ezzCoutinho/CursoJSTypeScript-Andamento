// class association -> Quando uma class se associa-se com outra
// porém uma não é depedente da outra
// Dependency Inversion -> Quando usamos uma class abstract como contrato,
// e não uma class concreta. Pois class abstract não se modificam muito.
export class Escritor {
  constructor(
    private _nome: string,
    private _ferramenta: Ferramenta | null = null,
  ) {}

  get nome(): string {
    return this._nome;
  }

  set ferramenta(ferramenta: Ferramenta | null) {
    this._ferramenta = ferramenta;
  }

  get ferramenta(): Ferramenta | null {
    return this._ferramenta;
  }

  escrever(): void {
    if (this.ferramenta === null) {
      console.log(`Não posso escrever sem ferramenta.`);
      return;
    }
    this.ferramenta.escrever();
  }
}

export abstract class Ferramenta {
  constructor(private _nome: string) {}

  get nome(): string {
    return this._nome;
  }

  abstract escrever(): void;
}

export class Caneta extends Ferramenta {
  escrever(): void {
    console.log(`${this.nome}, está escrevendo...`);
  }
}

export class MaquinaEscrever extends Ferramenta {
  escrever(): void {
    console.log(`${this.nome}, está digitando...`);
  }
}

const escritor = new Escritor('Luiz');
const ferramentaCaneta = new Caneta('Caneta');
const ferramentaMaquina = new MaquinaEscrever('Máquina de escrever');

// console.log(escritor.nome);
// console.log(ferramentaCaneta.nome);
// console.log(ferramentaMaquina.nome);

escritor.ferramenta = ferramentaCaneta;
escritor.ferramenta = ferramentaMaquina;
escritor.ferramenta = null;
escritor.escrever();
