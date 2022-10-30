import fs from "fs";
import { StringBuffer } from "./StringBuffer";

export class BigChar {
  private charname: string;
  private fontdata: string;

  constructor(charname: string) {
    this.charname = charname;
    const lines = fs
      .readFileSync("big" + this.charname + ".txt", "utf8")
      .split("\n");
    const buf = new StringBuffer();
    for (const line of lines) {
      buf.append(line);
      buf.append("\n");
    }
    this.fontdata = buf.toString();
  }

  public print() {
    console.log(this.fontdata);
  }
}
