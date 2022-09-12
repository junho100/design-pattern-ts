import { DisplayImpl } from "./DisplayImpl";

export class Display {
  private impl: DisplayImpl;
  constructor(impl: DisplayImpl) {
    this.impl = impl;
  }
  public open() {
    this.impl.rawOpen();
  }
  public print() {
    this.impl.rawPrint();
  }
  public close() {
    this.impl.rawClose();
  }

  public display() {
    this.open();
    this.print();
    this.close();
  }
}
