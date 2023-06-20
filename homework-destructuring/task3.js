// Write a destructuring assignment that:
// assigns the property name to a variable name
// assigns the property years to a variable age
// assigns the property isAdmin to a variable isAdmin with a default value of false if the property doesn't exist in the object
// Display the variables on the screen.

const user1 = {
    name: "John",
    years: 30
};

const { name, years: age, isAdmin = false } = user1

console.log(name, age, isAdmin);