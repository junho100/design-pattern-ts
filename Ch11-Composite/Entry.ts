export abstract class Entry {
  public abstract getName(): string;
  public abstract getSize(): number;
  public publicPrintList(): void {
    this.printList("");
  }
  protected abstract printList(prefix: string): void;
  public toString(): string {
    return this.getName() + " (" + this.getSize() + ")";
  }
}
