// Two companies have decided to merge, and they need to combine their customer databases.
// You have two arrays of strings, each containing customer surnames. 
// Create a new array based on these arrays, which will be the combination of the two arrays without any duplicate surnames.

const clients1 = ["Gilbert", "Salvatore", "Pierce", "Summers", "Forbes", "Donovan", "Bennett"];
const clients2 = ["Pierce", "Zaltzman", "Salvatore", "Michaelson"];

const result = [...new Set([...clients1, ...clients2])]

console.log(result)