// Given the object employee. 
// Add properties age and salary to it without modifying the original object (a new object should be created with all the necessary properties).
// Print the new object to the console.

const employee = {
    name: 'Vitalii',
    surname: 'Klichko'
}

const data = { age: 30, salary: 1000 }
let obj = { ...employee, ...data }

console.log(obj)