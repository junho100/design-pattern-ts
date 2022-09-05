import { Product } from "./Product";

export class MessageBox implements Product {
  private decochar: string;

  constructor(decochar: string) {
    this.decochar = decochar;
  }

  public use(s: string): void {
    const length: number = s.length;
    console.log(this.decochar.repeat(length + 4));
    console.log(this.decochar + " " + s + " " + this.decochar);
    console.log(this.decochar.repeat(length + 4));
  }

  public createClone(): Product {
    const p: Product = new MessageBox(this.decochar);
    return p;
  }
}
