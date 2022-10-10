import fs from "fs";

export class Property {
  private data: Record<any, any> = {};
  public load(filename: string) {
    const txt = fs.readFileSync(filename);
    const strTxt = txt.toString("utf-8");
    const props = strTxt.split("\n");
    for (const p of props) {
      const ps = p.split("=");
      this.data[ps[0]] = ps[1];
    }
  }

  getProperty(addr: string) {
    return this.data[addr];
  }
}
