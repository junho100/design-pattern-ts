import { BigChar } from "./BigChar";
import { BigCharFactory } from "./BigCharFactory";

export class BigString {
  private bigchars: BigChar[] = [];

  constructor(string: string) {
    const factory: BigCharFactory = BigCharFactory.getInstance();
    for (let i = 0; i < string.length; i++) {
      this.bigchars.push(factory.getBigChar(string.charAt(i)));
    }
  }

  public print() {
    for (let i = 0; i < this.bigchars.length; i++) {
      this.bigchars[i].print();
    }
  }
}
