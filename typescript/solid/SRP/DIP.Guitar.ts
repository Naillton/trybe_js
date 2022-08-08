// eslint-disable-next-line import/no-unresolved
import Instrument from './DIP.Interface';

export default class Guitar implements Instrument {
  constructor(public name: string) {
    this.name = name;
   }
      
  public play(): void {
    console.log(`${this.name} está tocando`);
  }
}