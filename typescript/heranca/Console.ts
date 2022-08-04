import { Logger } from "./interface/Logger";
import { Database } from "./interface/Database";

class ConsoleLogger implements Logger {
  log(param: string): void {
    console.log(`class 1: ${param}`);
  }
}

class ConsoleLogger2 implements Logger {
  log(param: string): void {
    console.log(`class 2: ${param}`);
  }
}

class ExampleDatabase implements Database {
  constructor(public attr: Logger = new ConsoleLogger()) { }

  save(key: string, value: string): void {
    this.attr.log(`valor ${value} chave ${key}`);
  }
}

const logger1 = new ConsoleLogger();
const logger2 = new ConsoleLogger2();

const obj1 = new ExampleDatabase(logger1);
const obj2 = new ExampleDatabase(logger2);
const obj3 = new ExampleDatabase();

obj1.save('chave 1', 'valor 1');
obj2.save('chave 2', 'valor 2');
obj3.save('chave 3', 'valor 3');