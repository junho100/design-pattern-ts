import { DisplayImpl } from "./DisplayImpl";

export class StringDisplayImpl extends DisplayImpl {
  private str: string;
  private width: number;
  constructor(str: string) {
    super();
    this.str = str;
    this.width = this.str.length;
  }
  public rawOpen(): void {
    this.printLine();
  }
  public rawPrint(): void {
    console.log("|" + this.str + "|");
  }
  public rawClose(): void {
    this.printLine();
  }

  private printLine() {
    console.log("+" + "-".repeat(this.width) + "+");
  }
}
