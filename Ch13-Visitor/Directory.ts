import { Entry } from "./Entry";
import { Visitor } from "./Visitor";

export class Directory extends Entry {
  private name: string;
  public directory: Array<any> = [];
  constructor(name: string) {
    super();
    this.name = name;
  }
  public getName(): string {
    return this.name;
  }
  public getSize(): number {
    let size: number = 0;
    for (const d of this.directory) {
      size += d.getSize();
    }

    return size;
  }
  public add(entry: Entry): Entry {
    this.directory.push(entry);
    return this;
  }

  public accept(v: Visitor): void {
    v.visit(this);
  }
}
