import { Hand } from "./Hand";
import { Random } from "./Random";
import { Strategy } from "./Strategy";

export class WinningStrategy implements Strategy {
  private random: Random;
  private won: boolean = false;
  private prevHand!: Hand;
  constructor() {
    this.random = new Random();
  }
  public nextHand(): Hand {
    if (!this.won) {
      this.prevHand = Hand.getHand(this.random.nextInt(3));
    }
    return this.prevHand;
  }

  public study(win: boolean): void {
    this.won = win;
  }
}
