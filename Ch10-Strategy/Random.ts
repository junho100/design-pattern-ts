export class Random {
  nextInt(range: number): number {
    return Math.floor(Math.random() * range);
  }
}
