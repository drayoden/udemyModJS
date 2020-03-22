// switch between JS files in index.html


class Book {
    constructor(title, author, isbn) {
        this.title = title; 
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
    addBookToList(book){
        const list = document.getElementById('book-list');
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="delete">X<a></td>
        `;
    
        list.appendChild(row);
    }

    showAlert(msg, className){
        // div
        const div = document.createElement('div');

        // class
        div.className =   `alert ${className}`;

        // add text to div
        div.appendChild(document.createTextNode(msg)); 

        // get parent (location of insertion)
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        container.insertBefore(div, form);

        // timeout alert, make it dissapper
        setTimeout(function(){
            document.querySelector('.alert').remove();
        }, 2000); 
    }

    deleteBook(target){
        if(target.className === 'delete'){
            target.parentElement.parentElement.remove();
        }
    }

    clearFields(){
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }
}

// local storage class
class Store {
    
    // get books from local storage
    static getBooks(){
        let books; 
        if (localStorage.getItem('books') === null){
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }
    
    // displays books in local storage on start
    static displayBooks() {
        const books = Store.getBooks();

        books.forEach(function(book){
            const ui = new UI;
            ui.addBookToList(book);
        })

    }

    // add a book to local storage
    static addBook(book) {
        
        // get current list/collection of books:
        const books = Store.getBooks();  

        // push the new book to the list/collection:
        books.push(book);

        // save the new list (with new book) to localstorage:
        localStorage.setItem('books', JSON.stringify(books)); 
    }

    // delete a book from local storage
    static deleteBook(isbn){
        const books = Store.getBooks();

        books.forEach(function(book, index){
            if(book.isbn === isbn){
                books.splice(index, 1);
            }
        });

        localStorage.setItem('books', JSON.stringify(books));
      
    }
}




// envent listeners

// DOM load event
document.addEventListener('DOMContentLoaded', Store.displayBooks()); 


// add book
document.getElementById('book-form').addEventListener('submit', 
    function(e){

        const title = document.getElementById('title').value,
              author = document.getElementById('author').value,
              isbn = document.getElementById('isbn').value;

        // new book 
        const book = new Book(title, author, isbn);

        // new UI
        const ui = new UI();

      
        // validate fields
        if(title === '' || author === '' || isbn === ''){
            // error alert
            ui.showAlert('Please fill all fields', 'err');
        } else {
            // add book to list
            ui.addBookToList(book);

            // add to local storage
            Store.addBook(book);

            // show success
            ui.showAlert('Book added successfully...', 'success')

            // clear fields
            ui.clearFields();

        }

        e.preventDefault();

});

// delete book - target 'X' a tag 
document.getElementById('book-list').addEventListener('click', function(e){
    const ui = new UI();
    ui.deleteBook(e.target);
    Store.deleteBook(e.target.parentElement.previousElementSibling.textContent);
    ui.showAlert('Book removed successfully...', 'success');
    e.preventDefault();
}); 