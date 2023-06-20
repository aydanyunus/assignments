// You have an array called characters which consists of objects. Each object describes a character.
// Create an array charactersShortInfo based on it, which consists of objects with only 3 fields - name, surname, and age.

const characters = [
    {
        name: "Elena",
        lastName: "Gilbert",
        age: 17,
        gender: "woman",
        status: "human"
    },
    {
        name: "Caroline",
        lastName: "Forbes",
        age: 17,
        gender: "woman",
        status: "human"
    },
    {
        name: "Alaric",
        lastName: "Saltzman",
        age: 31,
        gender: "man",
        status: "human"
    },
    {
        name: "Damon",
        lastName: "Salvatore",
        age: 156,
        gender: "man",
        status: "vampire"
    },
    {
        name: "Rebekah",
        lastName: "Mikaelson",
        age: 1089,
        gender: "woman",
        status: "vampire"
    },
    {
        name: "Klaus",
        lastName: "Mikaelson",
        age: 1093,
        gender: "man",
        status: "vampire"
    }
];

let charactersShortInfo = [];

charactersShortInfo = characters.map(({ name, lastName: surname, age }) => {
    return { name, surname, age }
})

console.log(charactersShortInfo)