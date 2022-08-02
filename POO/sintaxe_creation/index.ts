class Person {
  name: string;
  height: number;
  weight: number;

  constructor(n: string, h: number, w: number) {
    console.log(`creating person ${n}`);
    this.name = n;
    this.height = h;
    this.weight = w;
  }

  sllep() {
    console.log(`${this.name}: sheep sheep sheep zzzzzzz`);
  }
}

// instancia de classe person para criacao dos obj p1 e p2
const p1 = new Person('Maria', 171, 58);
const p2 = new Person('João', 175, 66);
console.log(p1.name, p1.height, p1.weight);
console.log(p2.name, p2.height, p2.weight);
p1.sllep();
p2.sllep();