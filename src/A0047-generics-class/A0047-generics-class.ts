// index signature -> chave vai ser number, e tem o tipo T
export class Pilha<T> {
  private contador = 0;
  private elementos: { [k: number]: T } = {};

  push(elemento: T): void {
    this.elementos[this.contador] = elemento;
    this.contador++;
    console.log(elemento);
  }

  pop(): T | void {
    if (this.pilhaVazia()) return undefined;

    this.contador--;
    const elemento = this.elementos[this.contador];
    delete this.elementos[this.contador];
    return elemento;
  }

  pilhaVazia(): boolean {
    return this.contador === 0;
  }

  tamanho(): number {
    return this.contador;
  }

  mostrarPilha(): void {
    for (const chave in this.elementos) {
      console.log(this.elementos[chave]);
    }
  }
}

const pilha = new Pilha<number | string>();
pilha.push(1);
pilha.push(2);
pilha.push(3);
pilha.push(4);
pilha.push(5);
pilha.push(6);
pilha.push('-');
pilha.mostrarPilha();

while (!pilha.pilhaVazia()) {
  console.log(pilha.pop());
}
