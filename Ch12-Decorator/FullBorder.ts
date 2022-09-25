import { Border } from "./Border";
import { Display } from "./Display";

export class FullBorder extends Border {
  constructor(display: Display) {
    super(display);
  }
  public getColumns(): number {
    return this.display.getColumns() + 2;
  }
  public getRows(): number {
    return this.display.getRows() + 2;
  }
  public getRowText(row: number): string | null {
    if (row === 0) {
      return "+" + "-".repeat(this.display.getColumns()) + "+";
    } else if (row === this.display.getRows() + 1) {
      return "+" + "-".repeat(this.display.getColumns()) + "+";
    } else {
      return "|" + this.display.getRowText(row - 1) + "|";
    }
  }
}
