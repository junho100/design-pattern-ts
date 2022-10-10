import fs from "fs";
import { Writer } from "./Writer";

export class FileWriter extends Writer {
  private filename: string;
  constructor(filename: string) {
    super();
    this.filename = filename;
  }

  public write(data: string): void {
    try {
      fs.appendFileSync(this.filename, data, "utf-8");
    } catch (e) {
      fs.writeFileSync(this.filename, data, "utf-8");
    }
  }
  public close(): void {}
}
