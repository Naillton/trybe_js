"use strict";
class Animal {
    constructor(date) {
        this.birthDate = date;
    }
    get age() {
        const timeDiff = Math.abs(Date.now() - new Date(this.birthDate).getTime());
        return Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
    }
}
class Mamifero extends Animal {
    constructor(name, date) {
        super(date);
        this.name = name;
        this.date = date;
    }
    walk() {
        console.log(`${this.name} está andando!`);
    }
    showBirthDate() {
        console.log(`data de aniversairo do mamifero ${this.birthDate}`);
    }
    getBirthDate() { return this.birthDate; }
}
class Ave extends Animal {
    constructor(name, date) {
        super(date);
        this.name = name;
        this.date = date;
    }
    walk() {
        console.log(`${this.name} está voando alto!`);
    }
    showBirthDate() {
        console.log(`data de aniversairo da ave ${this.birthDate}`);
    }
    getBirthDate() { return this.birthDate; }
}
const urubu = new Ave('Urubu', new Date(Date.parse('Jun 07, 2017')));
const tiger = new Mamifero('Tigre', new Date(Date.parse('Jun 18, 2019')));
const main = (animal) => {
    console.log(`idade do tigre ${animal.age} ano(s)`);
};
const mainAve = (animal) => {
    console.log(`idade da ave ${animal.age} ano(s)`);
};
main(tiger);
tiger.walk();
tiger.showBirthDate();
mainAve(urubu);
urubu.walk();
urubu.showBirthDate();
