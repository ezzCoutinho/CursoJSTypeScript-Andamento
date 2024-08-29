// super Class
export abstract class Animal {
  constructor(public name: string) {}
  abstract makeNoise(): void;
}
// subclass com polimorfismo.
export class Dog extends Animal {
  makeNoise(): void {
    console.log(`${this.name} está fazendo AU AU...`);
  }
}
//subclass com polimorfismo.
export class Cat extends Animal {
  makeNoise(): void {
    console.log(`${this.name} está fazendo MIAU...`);
  }
}
// subclass
class AnimalSounds {
  public playSound(animal: Animal): void {
    animal.makeNoise();
  }
}

const dog = new Dog('Tina');
const cat = new Cat('Suzy');
const animalSounds = new AnimalSounds();
animalSounds.playSound(dog);
animalSounds.playSound(cat);
