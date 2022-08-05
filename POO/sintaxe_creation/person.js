"use strict";
class Person {
    constructor(name, height, weight, age) {
        this.name = name;
        this._weight = weight;
        this._age = age;
        this.height = height;
    }
    // acessando valores com o get
    getWeight() {
        return this._weight;
    }
    get age() {
        return this._age;
    }
    // metodo setter usado para modificar o valor de atributos privados dentro da class
    set age(newValue) {
        if (newValue >= 0 && newValue < 200) {
            this._age = newValue;
        }
    }
    set weight(newValue) {
        if (newValue > 0 && newValue <= 300) {
            this._weight = newValue;
        }
    }
    birthday() {
        this._age += 1;
    }
}
const p1 = new Person('Maria', 171, 58, 19);
const p2 = new Person('João', 175, 66, 18);
// alterando variavel definida como public fora da classe
p1.name = 'Mariah';
// acessando o valor da variavel
console.log(p1.name);
// Acesso a método público que manipula atributo privado
console.log(p1.getWeight());
// Acesso a método com getter para manipular atributo privado como se fosse público
console.log(p2.age);
// Acesso a método público que manipula atributo privado
p2.birthday();
console.log(p2.age);
// Acesso a método com setter para manipular atributo privado como se fosse público
p2.age = 17;
console.log(p2.age);
// Leitura de atributo readonly
console.log(p1.height);
// validacao no set age impede a pessoa ter 300 anos de idade
p2.age = 300;
console.log(p2.age);
