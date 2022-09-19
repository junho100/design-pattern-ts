import { Hand } from "./Hand";
import { Strategy } from "./Strategy";

export class Player {
  private name: string;
  private strategy: Strategy;
  private wincount: number = 0;
  private losecount: number = 0;
  private gamecount: number = 0;
  constructor(name: string, strategy: Strategy) {
    this.name = name;
    this.strategy = strategy;
  }
  public nextHand(): Hand {
    return this.strategy.nextHand();
  }
  public win(): void {
    this.strategy.study(true);
    this.wincount++;
    this.gamecount++;
  }
  public lose(): void {
    this.strategy.study(false);
    this.losecount++;
    this.gamecount++;
  }

  public even(): void {
    this.gamecount++;
  }
  public toString() {
    return `[${this.name} : ${this.gamecount} games, ${this.wincount} win, ${this.losecount} lose]`;
  }

  public getCount() {
    return this.wincount;
  }
}
