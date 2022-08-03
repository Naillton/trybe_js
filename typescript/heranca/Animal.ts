interface Animal {
  getBirthDate(): Date;
}

class Animal {
  protected birthDate: Date

  constructor(
    date: Date,
  ) { 
    this.birthDate = date;
  }

  get age() {
    const timeDiff = Math.abs(
      Date.now() - new Date(this.birthDate).getTime()
    );

    return Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
  }
}

class Mamifero extends Animal implements Animal {
  constructor(public name: string, private date: Date) {
    super(date);
  }
  walk() {
    console.log(`${this.name} está andando!`);
  }

  showBirthDate() {
    console.log(`data de aniversairo do mamifero ${this.birthDate}`);
  }

  getBirthDate(): Date { return this.birthDate; }
}

class Ave extends Animal implements Animal {
  constructor(public name: string, private date: Date) {
    super(date);
  }
  walk() {
    console.log(`${this.name} está voando alto!`);
  }

  showBirthDate() {
    console.log(`data de aniversairo da ave ${this.birthDate}`);
  }

  getBirthDate(): Date { return this.birthDate; }
}

const urubu = new Ave(
  'Urubu',
  new Date(Date.parse('Jun 07, 2017')),
);

const tiger = new Mamifero(
  'Tigre',
  new Date(Date.parse('Jun 18, 2019')),
);

const main = (animal: Animal) => {
  console.log(`idade do tigre ${animal.age} ano(s)`);
}

const mainAve = (animal: Animal) => {
  console.log(`idade da ave ${animal.age} ano(s)`);
}

main(tiger);
tiger.walk();
tiger.showBirthDate();

mainAve(urubu);
urubu.walk();
urubu.showBirthDate();