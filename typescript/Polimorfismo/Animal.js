"use strict";
// classe pai ou SuperClass com atriuto e metodo
/* class Animal {
  public name: string;
  constructor(name: string) {
    this.name = name;
  }

  move(): void {
    console.log(`${this.name} está se movendo.`);
  }
} */
// classe abstrata para uma superclasse
class Animal {
    constructor(name) {
        this.name = name;
    }
}
// classes filhas ou SubClasses que contem metodos
class Bird extends Animal {
    constructor(name) {
        super(name);
    }
    move() {
        console.log(`${this.name} está voando.`);
    }
}
class Mamifero extends Animal {
    constructor(name) {
        super(name);
    }
    move() {
        console.log(`${this.name} está andando`);
    }
}
class Fish extends Animal {
    constructor(name) {
        super(name);
    }
    move() {
        console.log(`${this.name} esta nadando`);
    }
}
const a = new Fish('Tubarão');
const b = new Bird('Papagaio');
const c = new Mamifero('Tatu');
const myMove = (animal) => {
    animal.move();
};
myMove(a);
myMove(b);
myMove(c);
