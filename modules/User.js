import Storage from './storage.js';
// User Interface classes
class UI {
  static displayBooks() {
    const books = Storage.getBooks();
    // Loop through stored books
    books.forEach((book) => UI.addBook(book));
  }

  static addBook(book) {
    const booklist = document.querySelector('.bookstore');
    const bookrow = document.createElement('tr');
    bookrow.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td><button class="removebook">Remove book</button></td>
    `;
    booklist.appendChild(bookrow);
  }

  // set form back to default
  static setFormBackToDefault() {
    document.querySelector('.title').value = '';
    document.querySelector('.author').value = '';
  }

  // delete book
  static removeBook(e) {
    if (e.classList.contains('removebook')) {
      e.parentElement.parentElement.remove();
    }
  }
}

export default UI;
