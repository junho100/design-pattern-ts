import { AbstractDisplay } from "./AbstractDisplay";
import { CharDisplay } from "./CharDisplay";
import { StringDisplay_old } from "./StringDisplay";
import { StringDisplay } from "./StringDisplayWithKorean";

const main = () => {
  const d1: AbstractDisplay = new CharDisplay("H");

  const d2: AbstractDisplay = new StringDisplay("Hello, world.");

  const d3: AbstractDisplay = new StringDisplay("안녕하세요.");

  const d4: AbstractDisplay = new StringDisplay_old("안녕하세요.");

  d1.display();
  d2.display();
  d4.display();
};

main();
