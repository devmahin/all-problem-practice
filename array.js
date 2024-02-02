// // 1. Declare an array
// // Declare an array with 5 elements containing fruits
// // console log the 3rd index element
// // change the value of the 2nd index element to jambura
// // console log the final array




// let fruits = ["apple", "banana", "orange", "grapes", "kiwi"];
// console.log(fruits[3])
// console.log(fruits[2] = "jambura")
// console.log(fruits)





// // 2. Add or remove elements
// // Declare an array of 3 tourist destinations
// // Add a new tourist destination to your tourist array
// // Add two more to your array
// // Remove the last tourist destination you have added
// // display the final array as output
// let touristDestinations = ["Paris", "Tokyo", "New York"];
//     touristDestinations.push("Sydney")
//     touristDestinations.push("Barcelona", "Bangkok")
//     touristDestinations.pop()
//     console.log(touristDestinations)










// // 3. Checking Array Membership with ‘includes’
// // Instructions:

// // Create an array of books containing different book.

// // Use the includes method to check if the array contains a javascript book.

// // Print a message to the console indicating whether the element is present in the array or not.

// let books = ["To Kill a Mockingbird", "1984", "The Great Gatsby", "Pride and Prejudice", "The Catcher in the Rye", "The Lord of the Rings", "Harry Potter and the Sorcerer's Stone", "The Chronicles of Narnia", "The Hunger Games", "The Da Vinci Code", "javascript"];
//     let checkBook = books.includes("The Hunger Games")
//     console.log(checkBook)














// 4. Checking if it's an Array
// Instructions:

// Create different variables, each containing either an array or a non-array value.

// Now use isArray to check if each variable is an array.

// Print a message to the console indicating whether each variable is an array or not.

// Array variables
let fruitss = ["apple", "banana", "orange"];
let age = 30;
let name = "John Doe";
let numbers = [1, 2, 3, 4, 5];
let colors = ["red", "green", "blue"];
let isStudent = true;

let arrayCheck1 = Array.isArray(fruitss)
let arrayCheck2 = Array.isArray(name)
let arrayCheck3 = Array.isArray(colors)
console.log(arrayCheck1)
console.log(arrayCheck2)
console.log(arrayCheck3)









// 5. Combining Arrays
// Instructions:
// Create two arrays of your choice.
// Use the concat method to combine the two arrays into a new array.
// Print both the original arrays and the combined array using console.log().

let countries = ["USA", "Canada", "France", "Japan", "Australia"];
let cities = ["New York", "Toronto", "Paris", "Tokyo", "Sydney"];
let con = countries.concat(cities)
console.log(con)