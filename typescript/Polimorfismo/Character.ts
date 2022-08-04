abstract class Character {
  abstract talk(): void
  abstract specialMovie(): void
}

class MeleeCharacter extends Character {
  talk(): void {
    console.log(`Falando besteira`);
  }

  specialMovie(): void {
    console.log('Movimento especial');
  }
}

class LongRangeCharacter extends Character {
  talk(): void {
    console.log(`Falando besteira a longa distancia`);
  }
  
  specialMovie(): void {
    console.log('Movimento especial a longa distancia');
  } 
}

const myFunc = (charac: Character) => {
  charac.talk();
  charac.specialMovie();
}

const melle = new MeleeCharacter();
const long = new LongRangeCharacter();

myFunc(melle);
myFunc(long);