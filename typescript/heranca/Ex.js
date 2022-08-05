"use strict";
class Superclass {
    constructor(isSuper = true) {
        this.isSuper = isSuper;
    }
    sayHello() {
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
const myfunc = (obj) => {
    console.log(obj.isSuper === true ? 'Super!' : 'Sub!');
};
myfunc(one);
myfunc(two);
