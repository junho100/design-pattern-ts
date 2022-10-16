import { NumberGenerator } from "./NumberGenerator";

export class RandomNumberGenerator extends NumberGenerator {
  private number!: number;
  public getNumber(): number {
    return this.number;
  }
  public execute(): void {
    for (let i = 0; i < 20; i++) {
      this.number = Math.floor(Math.random() * 49 + 1);
      this.notifyObservers();
    }
  }
}
