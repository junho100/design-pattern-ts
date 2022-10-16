import { NumberGenerator } from "./NumberGenerator";
import { Observer } from "./Observer";
import { Thread } from "./Thread";

export class GraphObserver implements Observer {
  update(generator: NumberGenerator): void {
    console.log("GraphObserver:" + "*".repeat(generator.getNumber()));
    Thread.sleep(100);
  }
}
