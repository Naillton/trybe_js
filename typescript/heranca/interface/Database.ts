import { Logger } from "./Logger";

export interface Database {
  attr: Logger;
  save(key: string, value:string): void;
}