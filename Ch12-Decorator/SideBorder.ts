import { Border } from "./Border";
import { Display } from "./Display";

export class SideBorder extends Border {
  private borderChar: string;
  constructor(display: Display, ch: string) {
    super(display);
    this.borderChar = ch;
  }
  public getColumns(): number {
    return this.display.getColumns() + 2;
  }
  public getRows(): number {
    return this.display.getRows();
  }
  public getRowText(row: number): string | null {
    return this.borderChar + this.display.getRowText(row) + this.borderChar;
  }
}
