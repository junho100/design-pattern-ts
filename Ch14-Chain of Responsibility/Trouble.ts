export class Trouble {
  private num: number;
  constructor(num: number) {
    this.num = num;
  }
  public getNumber(): number {
    return this.num;
  }
  public toString(): string {
    return `[Trouble ${this.num}]`;
  }
}
