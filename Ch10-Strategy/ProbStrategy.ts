import { Hand } from "./Hand";
import { Random } from "./Random";
import { Strategy } from "./Strategy";

export class ProbStrategy implements Strategy {
  nextHand(): Hand {
    const bet: number = this.random.nextInt(this.getSum(this.currentHandValue));
    let handvalue = 0;
    if (bet < this.history[this.currentHandValue][0]) {
      handvalue = 0;
    } else if (
      bet <
      this.history[this.currentHandValue][0] +
        this.history[this.currentHandValue][1]
    ) {
      handvalue = 1;
    } else {
      handvalue = 2;
    }

    this.prevHandValue = this.currentHandValue;
    this.currentHandValue = handvalue;
    return Hand.getHand(handvalue);
  }

  private getSum(hv: number): number {
    let sum = 0;
    for (let i = 0; i < 3; i++) {
      sum += this.history[hv][i];
    }

    return sum;
  }

  study(win: boolean): void {
    if (win) {
      this.history[this.prevHandValue][this.currentHandValue]++;
    } else {
      this.history[this.prevHandValue][(this.currentHandValue + 1) % 3]++;
      this.history[this.prevHandValue][(this.currentHandValue + 2) % 3]++;
    }
  }

  private random: Random;
  private prevHandValue: number = 0;
  private currentHandValue: number = 0;
  private history: Array<any> = [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1],
  ];
  constructor() {
    this.random = new Random();
  }
}
