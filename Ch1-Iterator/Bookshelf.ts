import { BookShelfIterator } from "./BookShelfIterator";
import { _Iterator } from "./Iterator";
import { Aggregate } from "./Aggregate";
import { Book } from "./Book";

export class BookShelf extends Aggregate {
  private books: Book[] = [];
  private last: number = 0;
  getBookAt(index: number): Book {
    return this.books[index];
  }
  appendBook(book: Book) {
    this.books.push(book);
    this.last++;
  }
  getLength(): number {
    return this.last;
  }
  iterator(): _Iterator {
    return new BookShelfIterator(this);
  }
}
