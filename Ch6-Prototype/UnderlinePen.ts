import { Product } from "./Product";

export class UnderlinePen implements Product {
  private ulchar: string;
  constructor(ulchar: string) {
    this.ulchar = ulchar;
  }
  public use(s: string): void {
    const length = s.length;
    console.log('"' + s + '"');
    console.log(" " + this.ulchar.repeat(length));
  }
  public createClone(): Product {
    const p = new UnderlinePen(this.ulchar);
    return p;
  }
}
