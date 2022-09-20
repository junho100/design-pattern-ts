import { Entry } from "./Entry";

export class Directory extends Entry {
  private name: string;
  private directory: Array<any> = [];
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

  protected printList(prefix: string): void {
    console.log(prefix + "/" + this);
    for (const d of this.directory) {
      d.printList(prefix + "/" + this.name);
    }
  }
}
