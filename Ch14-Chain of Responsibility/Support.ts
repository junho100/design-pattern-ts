import { Trouble } from "./Trouble";

export abstract class Support {
  private name: string;
  private next?: Support;
  constructor(name: string) {
    this.name = name;
  }
  public setNext(next: Support): Support {
    this.next = next;
    return next;
  }
  public support(trouble: Trouble) {
    if (this.resolve(trouble)) {
      this.done(trouble);
    } else if (this.next !== null) {
      this.next?.support(trouble);
    } else {
      this.fail(trouble);
    }
  }
  public toString() {
    return `[${this.name}]`;
  }
  protected abstract resolve(trouble: Trouble): boolean;
  protected done(trouble: Trouble): void {
    console.log(trouble + "is resolved by" + this + ".");
  }
  protected fail(trouble: Trouble): void {
    console.log(trouble + " cannot be resolved");
  }
}
