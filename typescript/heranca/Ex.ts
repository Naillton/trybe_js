class Superclass {
   constructor(
    public isSuper: boolean = true,
   ) { }

  sayHello(): void {
    console.log('Olá Mundo');
  }
}

class Subclass extends Superclass {
  constructor() {
    super();
    this.isSuper = false;
  }
}

const one = new Superclass();
const two = new Subclass();

const myfunc = (obj: Superclass): void => {
  console.log(obj.isSuper === true ? 'Super!' : 'Sub!');
};

myfunc(one);
myfunc(two);