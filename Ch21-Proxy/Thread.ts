export class Thread {
  static sleep(ms: number) {
    const wakeUpTime = Date.now() + ms;
    while (Date.now() < wakeUpTime) {}
  }
}
