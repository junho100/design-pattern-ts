import { BigChar } from "./BigChar";

export class BigCharFactory {
  private pool: Record<string, BigChar> = {};
  private static singleton = new BigCharFactory();
  private constructor() {}
  public static getInstance() {
    return this.singleton;
  }

  public getBigChar(charname: string) {
    let bc: BigChar = this.pool[charname];
    if (bc === undefined) {
      bc = new BigChar(charname);
      this.pool[charname] = bc;
    }
    return bc;
  }
}
