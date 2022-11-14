import { Printable } from "./Printable";
import { Printer } from "./Printer";

export class PrinterProxy implements Printable {
  private name: string;
  private real?: Printer;

  constructor(name: string) {
    this.name = name;
  }
  setPrintName(name: string): void {
    if (this.real !== undefined) {
      (this.real as unknown as Printer).setPrintName(name);
    }
    this.name = name;
  }
  getPrintName(): string {
    return this.name;
  }
  print(string: string): void {
    this.realize();
    this.real?.print(string);
  }
  private realize(): void {
    if (this.real === undefined) {
      this.real = new Printer(this.name);
    }
  }
}
