// switch between JS files in index.html


// book constructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// UI constructor
function UI() {}

UI.prototype.addBookToList = function(book){
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

// delete book
UI.prototype.deleteBook = function(target) {
    if(target.className === 'delete'){
        target.parentElement.parentElement.remove();
    }
}


// UI clearfields
UI.prototype.clearFields = function(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}

// showAlert
UI.prototype.showAlert = function(msg, className){
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
    }, 4000); 
}

// envent listeners

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

            // show success
            ui.showAlert('Book added successfully...', 'success')

            // clear fields
            ui.clearFields();

        }

        e.preventDefault();

});


document.getElementById('book-list').addEventListener('click', function(e){
    const ui = new UI();
    ui.deleteBook(e.target);
    ui.showAlert('Book removed successfully...', 'success');
    e.preventDefault();
}); 