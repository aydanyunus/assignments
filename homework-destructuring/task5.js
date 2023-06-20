// You are given an array of books. 
// You need to add one more book to it without modifying the existing array (the result should be a new array).


const books = [{
    name: 'Harry Potter',
    author: 'J.K. Rowling'
}, {
    name: 'Lord of the rings',
    author: 'J.R.R. Tolkien'
}, {
    name: 'The witcher',
    author: 'Andrzej Sapkowski'
}];

const bookToAdd = {
    name: 'Game of thrones',
    author: 'George R. R. Martin'
}


let newBookList = [...books, {...bookToAdd}]

// new array
console.log(newBookList)

// existing array
console.log(books)