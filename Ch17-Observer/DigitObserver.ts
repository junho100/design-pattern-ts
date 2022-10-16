import { NumberGenerator } from "./NumberGenerator";
import { Observer } from "./Observer";
import { Thread } from "./Thread";

export class DigitObserver implements Observer {
  update(generator: NumberGenerator): void {
    console.log("DigitObserver: " + generator.getNumber());
    Thread.sleep(100);
  }
}
