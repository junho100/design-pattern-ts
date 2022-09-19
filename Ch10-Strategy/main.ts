import { Hand } from "./Hand";
import { Player } from "./Player";
import { ProbStrategy } from "./ProbStrategy";
import { WinningStrategy } from "./WinningStrategy";

const main = () => {
  const player1: Player = new Player("doori", new WinningStrategy());
  const player2: Player = new Player("hana", new ProbStrategy());
  for (let i = 0; i < 10000; i++) {
    const nextHand1: Hand = player1.nextHand();
    const nextHand2: Hand = player2.nextHand();
    if (nextHand1.isStrongerThan(nextHand2)) {
      console.log(`winner : ${player1}`);
      player1.win();
      player2.lose();
    } else if (nextHand2.isStrongerThan(nextHand1)) {
      console.log(`winner : ${player2}`);
      player1.lose();
      player2.win();
    } else {
      console.log("Even...");
      player1.even();
      player2.even();
    }
  }

  console.log("Total Result : ");
  console.log(player1.toString());
  console.log(player2.toString());
};

main();
