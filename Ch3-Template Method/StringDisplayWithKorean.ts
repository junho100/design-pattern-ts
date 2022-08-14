import { AbstractDisplay } from "./AbstractDisplay";

export class StringDisplay extends AbstractDisplay {
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

    if (this.checkKorean(this.str)) {
      console.log("+" + dash.repeat(this.width * 2) + "+");
    } else {
      console.log("+" + dash.repeat(this.width) + "+");
    }
  }

  private checkKorean(str: string): boolean {
    const pattern = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
    if (pattern.test(this.str)) {
      return true;
    } else {
      return false;
    }
  }
}
