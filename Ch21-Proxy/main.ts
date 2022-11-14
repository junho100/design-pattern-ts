import { Printable } from "./Printable";
import { PrinterProxy } from "./PrinterProxy";

const main = () => {
  const p: Printable = new PrinterProxy("Alice");
  console.log("이름은 현재" + p.getPrintName() + "입니다.");
  p.setPrintName("Bob");
  console.log("이름은 현재" + p.getPrintName() + "입니다.");
  p.print("Hello, world.");
};

main();
