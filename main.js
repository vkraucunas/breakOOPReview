function Book (attributes) {
    this.title = attributes.title;
    this.genre = attributes.genre;
    this.author = attributes.author;
    this.read = false;
    this.startDate = "";
    this.endDate = "";
}

var BookList = function() {
    this.numberRead = 0;
    this.numberNotRead = 0;
    this.currentBook = '';
    this.nextBook = '';
    this.prevBook = '';
    this.allBooks = [];
};

BookList.prototype.addBook = function(bookObj) {
    this.allBooks.push(bookObj);
    this.numberNotRead += 1;
    if (this.currentBook === '') {
        this.currentBook = bookObj;
    } else if (this.nextBook === '') {
        this.nextBook = bookObj;
    }
}

BookList.prototype.startCurrentBook = function() {
    this.currentBook.startDate = new Date(Date.now());
}

BookList.prototype.finishCurrentBook = function() {
    this.numberRead += 1;
    this.numberNotRead -= 1;
    this.currentBook.read = true;
    this.currentBook.endDate = new Date(Date.now());
    this.prevBook = this.currentBook;
    this.currentBook = this.nextBook;
    var index = this.allBooks.indexOf(this.currentBook);
    this.nextBook = this.allBooks[index+1] || '';
}



var myBooks = new BookList({});


var book1 = new Book({
    title: "The Tao of Pooh",
    genre: "Philosophy",
    author: "Benjamin Hoff",
});

var book2 = new Book({
    title: "Outlander",
    genre: "Fantasy",
    author: "Diana Gabaldon"
});

var book3 = new Book({
    title: "Yes, Please",
    genre: "Autobiography",
    author: "Amy Poehler"
});

var book4 = new Book({
    title: "Harry Potter and the Chamber of Secrets",
    genre: "Fantasy",
    author: "J.K. Rowling"
});

myBooks.addBook(book1);
myBooks.addBook(book2);
myBooks.addBook(book3);
myBooks.addBook(book4);

console.log(myBooks);
myBooks.finishCurrentBook();

BookList.prototype.renderToDom = function() {
    for (var i = 0; i < this.allBooks.length; i++) {
        console.log(this.allBooks[i]);
        $('#library').append("<li>"+this.allBooks[i].title+"</li><button class='btn btn-default btn-xs'>Read me</button>");
    }
}


console.log(myBooks);
