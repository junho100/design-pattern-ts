import { Print } from "./Print";
import { PrintBanner } from "./PrintBanner";

const main = () => {
  const p: Print = new PrintBanner("Hello");
  p.printWeak();
  p.printStrong();
};

main();
