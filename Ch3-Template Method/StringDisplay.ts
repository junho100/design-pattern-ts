import { AbstractDisplay } from "./AbstractDisplay";

export class StringDisplay_old extends AbstractDisplay {
  private str: string;
  private width: number;

  constructor(str: string) {
    super();
    this.str = str;
    this.width = str.length;
  }

  public open(): void {
    this.printLine();
  }

  public print(): void {
    console.log("|" + this.str + "|");
  }

  public close(): void {
    this.printLine();
  }

  private printLine() {
    const dash = "-";

    console.log("+" + dash.repeat(this.width) + "+");
  }
}
