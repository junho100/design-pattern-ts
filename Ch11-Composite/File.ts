import { Entry } from "./Entry";

export class File extends Entry {
  private name: string;
  private size: number;
  constructor(name: string, size: number) {
    super();
    this.name = name;
    this.size = size;
  }
  getName(): string {
    return this.name;
  }
  public getSize(): number {
    return this.size;
  }

  protected printList(prefix: string): void {
    console.log(`${prefix}/${this}`);
  }
}
