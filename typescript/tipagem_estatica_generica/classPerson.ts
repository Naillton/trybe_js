enum EyeColor {
  Black = 'Pretos',
  Blue = "Azuis",
  Green = "Verdes",
  Brown = "Castanhos",
}

class Person {
  name: string;
  birthDate: Date;
  // o ? no final da nossa propriedade faz com que a mesma não seja obrigatoria e entao ela teria ou
  // aquele valor definido antes no enum ou undefined como valor 
  eyeColor?: EyeColor;

  constructor(name: string, birthDate: Date, eyeColor: EyeColor) {
    this.name = name;
    this.birthDate = birthDate;
    this.eyeColor = eyeColor;
  }

  speak(): void {
    console.log(`${this.name} está falando.`);
  }

  eat(): void {
    console.log(`${this.name} está comendo`);
  }

  walk(): void {
    console.log(`${this.name} está andando.`);
  }
}

const person1 = new Person("Jane Doe", new Date("1986-01-01"), EyeColor.Brown);
const person2 = new Person("Jon Doe", new Date("1980-08-05"), EyeColor.Black);

console.log(person1);
person1.speak();

console.log(person2);
person2.walk();