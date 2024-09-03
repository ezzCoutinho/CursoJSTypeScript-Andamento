export class Carro {
  constructor(private readonly motor: Motor = new Motor()) {}
  ligar(): void {
    this.motor.ligar();
  }

  acelerar(): void {
    this.motor.acelerar();
  }

  parar(): void {
    this.motor.parar();
  }

  desligar(): void {
    this.motor.desligar();
  }
}

export class Motor {
  constructor() {}

  ligar(): void {
    console.log('Motor está ligado...');
  }

  acelerar(): void {
    console.log('Motor está acelerando...');
  }

  parar(): void {
    console.log('Motor não está acelerando...');
  }

  desligar(): void {
    console.log('Motor está desligado...');
  }
}

const carro = new Carro();

carro.acelerar();
carro.desligar();
carro.ligar();
carro.parar();
