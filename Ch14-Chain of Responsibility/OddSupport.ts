import { Support } from "./Support";
import { Trouble } from "./Trouble";

export class OddSupport extends Support {
  constructor(name: string) {
    super(name);
  }
  protected resolve(trouble: Trouble): boolean {
    if (trouble.getNumber() % 2 === 1) {
      return true;
    } else {
      return false;
    }
  }
}
