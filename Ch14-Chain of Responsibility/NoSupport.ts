import { Support } from "./Support";
import { Trouble } from "./Trouble";

export class NoSupport extends Support {
  constructor(name: string) {
    super(name);
  }
  protected resolve(trouble: Trouble): boolean {
    return false;
  }
}
