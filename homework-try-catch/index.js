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


books.forEach((book, index) => {
    try {
        if (!book.hasOwnProperty('author')) {
            throw new Error(`author property is missing in the object. Array index: "${index}".`)
        }
        if (!book.hasOwnProperty('name')) {
            throw new Error(`name property is missing in the object. Array index: "${index}".`)
        }
        if (!book.hasOwnProperty('price')) {
            throw new Error(`price property is missing in the object. Array index: "${index}".`)
        }
        const listItem = document.createElement('li');
        list.appendChild(listItem);
        listItem.textContent = `${book.name} - ${book.author} (price: ${book.price}$)`

    } catch (err) {
        console.log(err.message)
    }
})