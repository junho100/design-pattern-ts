import { Book } from "./Book";
import { BookShelf } from "./Bookshelf";
import { _Iterator } from "./Iterator";

const main = () => {
  const bookShelf = new BookShelf();
  bookShelf.appendBook(new Book("Arround the World in 80 Days"));
  bookShelf.appendBook(new Book("Bible"));
  bookShelf.appendBook(new Book("Cinderella"));
  bookShelf.appendBook(new Book("Daddy-Long-Legs"));
  const it: _Iterator = bookShelf.iterator();
  while (it.hasNext()) {
    const book = it.next() as Book;
    console.log(book.getName());
  }
};

main();
