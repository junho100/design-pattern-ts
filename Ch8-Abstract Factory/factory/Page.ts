import { Item } from "./Item";
import fs from "fs";

export abstract class Page {
  protected title: string;
  protected author: string;
  protected content: Item[] = [];

  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
  }

  public add(item: Item): void {
    this.content.push(item);
  }

  public output(): void {
    const filename = this.title + ".html";
    fs.writeFileSync(filename, this.makeHTML());
    console.log(`${filename} is created.`);
  }

  public abstract makeHTML(): string;
}
