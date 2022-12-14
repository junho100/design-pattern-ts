import { Item } from "./Item";

export abstract class Tray extends Item {
  protected tray: Item[] = [];

  constructor(caption: string) {
    super(caption);
  }

  public add(item: Item) {
    this.tray.push(item);
  }
}
