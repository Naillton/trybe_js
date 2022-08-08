// eslint-disable-next-line import/no-unresolved, import/extensions
import Notificator from './Notificator';

export default class ConsoleNotification implements Notificator {
  constructor(private name: string) {
    this.name = name;
  }

  sendNotification(message: string): void {
    console.log(`Here we go again! - ${message} from ${this.name}`);
  }
}