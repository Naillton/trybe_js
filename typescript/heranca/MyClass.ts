import MyInterface from "./interface/MyInterface";

class MyClass implements MyInterface {
  myNumber: number;
  constructor(num: number) {
    this.myNumber = num;
  }

  myFunc(myParam: number): string {
    const soma = myParam + this.myNumber;
    return soma.toString();
  }
}

const obj1 = new MyClass(4);

console.log(obj1.myFunc(4));