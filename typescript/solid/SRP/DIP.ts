// eslint-disable-next-line import/no-unresolved
import Drums from './DIP.Drums';
// eslint-disable-next-line import/no-unresolved
import Guitar from './DIP.Guitar';
// eslint-disable-next-line import/no-unresolved
import Flute from './DIP.Flute';

class Musician {
  constructor(
    public name: string,
    public instrument = new Flute('Minha flauta'),
  ) {
    this.name = name;
  }

  play() {
    this.instrument.play();
    console.log(
        `"${this.name}" é quem está comandando a emissão dos sons`,
      );
  }
}

const musician1 = new Musician('Márcia');
const musician2 = new Musician('Vicente', new Drums('Minha bateria'));
const musician3 = new Musician('Natan', new Guitar('Meu violão'));

musician1.play();
musician2.play();
musician3.play();