$(document).ready(function() {
    myBooks.renderToDom();
})

$('form').on('submit', function(event) {
    event.preventDefault();
    var newBook = new Book({
        title: $("#book-title").val(),
        genre: $("#book-genre").val(),
        author: $("#book-author").val()
    });

    myBooks.addBook(newBook);
    $("#library").empty();
    myBooks.renderToDom();
    $("#book-title").val(''),
    $("#book-genre").val('');
    $("#book-author").val('');
});

$(document).on('click', '#read', function() {

})