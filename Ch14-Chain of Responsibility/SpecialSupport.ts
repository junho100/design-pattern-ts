import { Support } from "./Support";
import { Trouble } from "./Trouble";

export class SpecialSupport extends Support {
  private num: number;
  constructor(name: string, num: number) {
    super(name);
    this.num = num;
  }
  protected resolve(trouble: Trouble): boolean {
    if (trouble.getNumber() === this.num) {
      return true;
    } else {
      return false;
    }
  }
}
