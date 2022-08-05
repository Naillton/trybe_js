"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MyClass {
    constructor(num) {
        this.myNumber = num;
    }
    myFunc(myParam) {
        const soma = myParam + this.myNumber;
        return soma.toString();
    }
}
const obj1 = new MyClass(4);
console.log(obj1.myFunc(4));
