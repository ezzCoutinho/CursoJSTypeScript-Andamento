// this -> inferindo this como retorno dos métodos, as subclass
// será criada o seu prorio this ou "herdada".
// Builder Gof -> setando os atributos de pouco em pouco, e não de uma vez,
// podendo inferir subtipos de atributos sem problemas, e podendo executar
// em modo cadeia.

export class Calculadora {
  constructor(public number: number) {}

  add(number: number): this {
    this.number += number;
    return this;
  }

  sub(number: number): this {
    this.number -= number;
    return this;
  }

  mul(number: number): this {
    this.number *= number;
    return this;
  }

  div(number: number): this {
    this.number /= number;
    return this;
  }
}

export class SubCalculadora extends Calculadora {
  pow(number: number): this {
    this.number **= number;
    return this;
  }
}

const calculadora = new SubCalculadora(10);

calculadora.add(10).mul(2).sub(10).div(2).pow(2);
console.log(calculadora);

// Builder - GoF
export class RequestBuilder {
  private method: 'get' | 'post' | null = null;
  private url: string | null = null;

  setMethod(method: 'get' | 'post'): this {
    this.method = method;
    return this;
  }

  setUrl(url: string): this {
    this.url = url;
    return this;
  }

  send(): void {
    console.log(`Enviado dados via ${this.method} para ${this.url}`);
  }
}

const request = new RequestBuilder();
request.setMethod('get').setUrl('https://www.google.com/').send();
