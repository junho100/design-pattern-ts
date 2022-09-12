export class StringBuffer {
  private buffer: string[] = [];
  append(str: string): void {
    this.buffer.push(str);
  }
  toString() {
    return this.buffer.join("");
  }
}
