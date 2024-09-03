// abstract em classe -> não pode ser instânciada.
// abstract em métodos -> não podem conter corpo, apenas inferir.
// abstract em atributos -> não podem conter corpo, apenas inferir.
// abstract em métodos e atributos passam a ser obrigatórios em subclasses.
export abstract class Personagem {
  protected abstract emoji: string;
  constructor(
    protected nome: string,
    protected ataque: number,
    protected vida: number,
  ) {}

  atacar(personagem: Personagem): void {
    this.bordao();
    personagem.perdeVida(this.ataque);
  }

  perdeVida(forcaAtaque: number): void {
    this.vida -= forcaAtaque;
    console.log(
      `${this.emoji} - ${this.nome}, está sendo atacado... vida: ${this.vida}  `,
    );
  }

  abstract bordao(): void;
}

export class Guerreira extends Personagem {
  protected emoji = '\u{1F9DD}';
  bordao(): void {
    console.log(
      `${this.emoji} GUERREEEIRAAAAA AOOO ATAQUEEEEEEEEEEEEEEEEEEEEEEE!!!!!1!`,
    );
  }
}
export class Monstro extends Personagem {
  protected emoji = '\u{1F479}';

  bordao(): void {
    console.log(`${this.emoji} ARGGGHHHHHHHHHHHHH TOME BEM NA JACA!`);
  }
}

const guerreira = new Guerreira('Guerreira', 100, 1000);
const monstro = new Monstro('Monstro', 87, 1000);

guerreira.atacar(monstro);
monstro.atacar(guerreira);
