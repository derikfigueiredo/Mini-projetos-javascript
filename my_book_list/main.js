// Book Class: represents a book
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

//UI Class: Handle UI Tasks
class UI {
  static displayBooks() {
    let bookList = [
      {
        title: 'book one',
        author: 'John Doe',
        isbn: '343445'
      },
      {
        title: 'Book two',
        author: 'Jane Duo',
        isbn: '452452'
      }
    ]

    let books = bookList;

    books.forEach((book)=> UI.addBookToList(book))
  }

  static addBookToList(book) {

    let list = document.querySelector('#book-list');
    let row = document.createElement('tr');

    row.innerHTML = `<td>${book.title}</td><td>${book.author}</td><td>${book.isbn}</td><td><a href="#" class="btn btn-danger btn-sm delete"> x </a></td>`

    list.appendChild(row)
  }
}

//Store Class: Handle Storage



//Event: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks)


//Event: Add a book



//Event: Remove a book



