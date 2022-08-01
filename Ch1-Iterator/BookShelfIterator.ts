import { BookShelf } from "./Bookshelf";
import { _Iterator } from "./Iterator";

export class BookShelfIterator extends _Iterator {
  private bookShelf: BookShelf;
  private index: number;
  constructor(bookShelf: BookShelf) {
    super();
    this.bookShelf = bookShelf;
    this.index = 0;
  }
  hasNext(): boolean {
    if (this.index < this.bookShelf.getLength()) {
      return true;
    } else {
      return false;
    }
  }
  next(): Object {
    const book = this.bookShelf.getBookAt(this.index);
    this.index++;
    return book;
  }
}
