"use strict";
class Character {
}
class MeleeCharacter extends Character {
    talk() {
        console.log(`Falando besteira`);
    }
    specialMovie() {
        console.log('Movimento especial');
    }
}
class LongRangeCharacter extends Character {
    talk() {
        console.log(`Falando besteira a longa distancia`);
    }
    specialMovie() {
        console.log('Movimento especial a longa distancia');
    }
}
const myFunc = (charac) => {
    charac.talk();
    charac.specialMovie();
};
const melle = new MeleeCharacter();
const long = new LongRangeCharacter();
myFunc(melle);
myFunc(long);
