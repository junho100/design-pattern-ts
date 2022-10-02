import { Support } from "./Support";
import { Trouble } from "./Trouble";

export class LimitSupport extends Support {
  private limit: number;
  constructor(name: string, limit: number) {
    super(name);
    this.limit = limit;
  }

  protected resolve(trouble: Trouble): boolean {
    if (trouble.getNumber() < this.limit) {
      return true;
    } else {
      return false;
    }
  }
}
