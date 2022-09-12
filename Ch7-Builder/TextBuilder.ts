import { Builder } from "./Builder";
import { StringBuffer } from "./StringBuffer";

export class TextBuilder extends Builder {
  private buffer: StringBuffer = new StringBuffer();
  public makeTitle(title: string): void {
    this.buffer.append("=========================\n");
    this.buffer.append("⌜" + title + "⌟");
    this.buffer.append("\n");
  }
  public makeString(str: string): void {
    this.buffer.append("■" + str + "\n");
    this.buffer.append("\n");
  }
  public makeItems(items: string[]): void {
    for (const item of items) {
      this.buffer.append("  ・" + item + "\n");
    }
    this.buffer.append("\n");
  }

  public close(): void {
    this.buffer.append("=========================\n");
  }
  public getResult(): string {
    return this.buffer.toString();
  }
}
