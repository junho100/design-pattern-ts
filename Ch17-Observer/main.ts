import { DigitObserver } from "./DigitObserver";
import { GraphObserver } from "./GraphObserver";
import { NumberGenerator } from "./NumberGenerator";
import { Observer } from "./Observer";
import { RandomNumberGenerator } from "./RandomNumberGenerator";

const main = () => {
  const generator: NumberGenerator = new RandomNumberGenerator();
  const observer1: Observer = new DigitObserver();
  const observer2: Observer = new GraphObserver();
  generator.addObserver(observer1);
  generator.addObserver(observer2);
  generator.execute();
};

main();
