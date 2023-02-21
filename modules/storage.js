// local storage classes
export default class Storage {
  static getBooks() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  // add books to local storage
  static addBookToStorage(book) {
    const books = Storage.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  // remove book from storage
  static removeBook(bookindex) {
    const books = Storage.getBook();
    books.forEach((book, index) => {
      if (book.title === bookindex) {
        books.splice(index, 1);
      }
    });
    // reset local storage
    localStorage.setItem('books', JSON.stringify(books));
  }
}
