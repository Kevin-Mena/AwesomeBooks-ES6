import UI from './User.js';
import Storage from './storage.js';
import { DateTime } from '../node_modules/luxon/src/luxon.js';
// Book class
class Book {
  constructor(title, author, index) {
    this.title = title;
    this.author = author;
    this.index = index;
  }
}

// display books when page is loaded
window.addEventListener('DOMContentLoaded', UI.displayBooks);
// add form event listener
const bookform = document.querySelector('#addbook-form');
const booktitle = document.querySelector('.title');
const bookauthor = document.querySelector('.author');
const errorMsg = document.querySelector('#error');

bookform.addEventListener('submit', (e) => {
  e.preventDefault();
  // input values
  const title = booktitle.value;
  const author = bookauthor.value;
  const newbook = new Book(title, author);
  if (title === '' || author === '') {
    errorMsg.style.display = 'block';
  } else {
    UI.addBook(newbook);
    Storage.addBookToStorage();
    UI.setFormBackToDefault();
  }
  setTimeout(() => errorMsg.remove(), 5000);
});
// handle delete button
const tableBody = document.querySelector('.bookstore');
tableBody.addEventListener('click', (e) => {
  // console.log(e.target);
  UI.removeBook(e.target);
});

// Display time
const displayTime = () => {
  const currentTime = document.querySelector('.time');
  const date = DateTime.now();
  currentTime.innerHTML = date.toLocaleString(
    DateTime.DATETIME_FULL_WITH_SECONDS,
  );
};
// set time interval
setInterval(displayTime, 1000);

// handle single page display
const bookList = document.querySelector('.booklist');
const newBook = document.querySelector('.addbook');
const contactSection = document.querySelector('.contact');
const listItem1 = document.querySelector('.nav-link1');
const listItem2 = document.querySelector('.nav-link2');
const listItem3 = document.querySelector('.nav-link3');

listItem1.addEventListener('click', () => {
  bookList.style.display = 'block';
  listItem1.style.cursor = 'pointer';
  listItem1.style.color = '#FFFFFF';
  listItem2.style.color = '#000000';
  listItem3.style.color = '#000000';
  newBook.style.display = 'none';
  contactSection.style.display = 'none';
});

listItem2.addEventListener('click', () => {
  newBook.style.display = 'block';
  listItem1.style.color = '#000000';
  listItem2.style.color = '#FFFFFF';
  listItem2.style.cursor = 'pointer';
  listItem3.style.color = '#000000';
  bookList.style.display = 'none';
  contactSection.style.display = 'none';
});

listItem3.addEventListener('click', () => {
  contactSection.style.display = 'block';
  listItem1.style.color = '#000000';
  listItem2.style.color = '#000000';
  listItem3.style.color = '#FFFFFF';
  listItem3.style.cursor = 'pointer';
  bookList.style.display = 'none';
  newBook.style.display = 'none';
});
window.addEventListener('DOMContentLoaded', () => {
  newBook.style.display = 'none';
  contactSection.style.display = 'none';
});
