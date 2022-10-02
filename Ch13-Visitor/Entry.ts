import { Element } from "./Element";
import { Visitor } from "./Visitor";

export abstract class Entry implements Element {
  public accept(v: Visitor): void {}
  public abstract getName(): string;
  public abstract getSize(): number;
  public toString(): string {
    return this.getName() + " (" + this.getSize() + ")";
  }
}
