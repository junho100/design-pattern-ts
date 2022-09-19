export class Hand {
  public static HANDVALUE_GUU = 0;
  public static HANDVALUE_CHO = 1;
  public static HANDVALUE_PAA = 2;
  public static hand: Hand[] = [
    new Hand(this.HANDVALUE_CHO),
    new Hand(this.HANDVALUE_GUU),
    new Hand(this.HANDVALUE_PAA),
  ];

  private static handName: string[] = ["주먹", "가위", "보"];

  private handvalue: number;

  private constructor(handvalue: number) {
    this.handvalue = handvalue;
  }

  public static getHand(handvalue: number): Hand {
    return this.hand[handvalue];
  }

  public isStrongerThan(h: Hand) {
    return this.fight(h) === 1;
  }

  public isWeakerThan(h: Hand) {
    return this.fight(h) === -1;
  }

  private fight(h: Hand): number {
    if (this == h) {
      return 0;
    } else if ((this.handvalue + 1) % 3 === h.handvalue) {
      return 1;
    } else {
      return -1;
    }
  }

  public toString(): string {
    return Hand.handName[this.handvalue];
  }
}
