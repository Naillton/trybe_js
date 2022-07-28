interface Dog {
    name: string;
    pelos: string;
    descricao(): string;
    latir(): string;
    correr(): string;
  }
  
  
  class Dog {
    constructor(name: string, pelos: string) {
      this.name = name;
      this.pelos = pelos;
    }
  
    descricao() {
      return `
      Meu cachorro chamado ${this.name}
      tem pelos ${this.pelos} e adora comer
      `; 
    }
  
    latir() {
      return `${this.name} está latindo e uivando`;
    }
  
    correr() {
      return `${this.name} está correndo`;
    }
  }
  
  const Dog1 = new Dog('Fenrir', 'negros');
  const Dog2 = new Dog('hades', 'vermelhos');
  
  console.log(Dog1.descricao());
  console.log(Dog1.latir());
  console.log(Dog1.correr());