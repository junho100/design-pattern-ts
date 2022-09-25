import { Display } from "./Display";

export class StringDisplay extends Display {
  private string: string;
  constructor(string: string) {
    super();
    this.string = string;
  }
  public getColumns(): number {
    return this.string.length;
  }
  public getRows(): number {
    return 1;
  }
  public getRowText(row: number): string | null {
    if (row === 0) {
      return this.string;
    } else {
      return null;
    }
  }
}
