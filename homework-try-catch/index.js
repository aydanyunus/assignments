const books = [
    {
        author: "Lucy Foley",
        name: "List of Invitees",
        price: 70
    },
    {
        author: "Susanna Clarke",
        name: "Jonathan Strange & Mr Norrell",
    },
    {
        name: "Design. A Book for Non-Designers.",
        price: 70
    },
    {
        author: "Alan Moore",
        name: "Neonomicon",
        price: 70
    },
    {
        author: "Terry Pratchett",
        name: "Moving Pictures",
        price: 40
    },
    {
        author: "Angus Hyland",
        name: "Cats in Art",
    }
];


const div = document.getElementById('root');
const list = document.createElement('ul');
div.appendChild(list);


let bookFields = [];

for (let field of books) {
    let props = Object.keys(field);
    props.forEach((prop) => {
        if (!bookFields.includes(prop)) {
            bookFields.push(prop);
        }
    })
}


const validateBook = (book) => {

    bookFields.find((propName) => {
        if (!Object.keys(book).includes(propName)) {
            throw new Error(`${propName} property is missing in the object. Array index: "${books.indexOf(book)}".`)
        }
    })
}


const createBookList = () => {

    books.map((book) => {
        try {
            validateBook(book)
            const listItem = document.createElement('li');
            list.appendChild(listItem);
            listItem.textContent = `${book.name} - ${book.author} (price: ${book.price}$)`
        } catch (err) {
            console.log(err.message)
        }
    })

}

createBookList()