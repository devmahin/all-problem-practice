// Task-1
// You went to the supermarket to buy some oranges and apples. Calculate how much money the shopkeeper will return.
// Input
// The first line of the input is the taka you have. The second line is the cost of 1 kg of oranges and 1 kg of apples.
// Output:
// Print the result.

// Sample Input:
// 1000
// 700
// Sample Output:
// 300

let applePrice = 350;
let orangePrice = 350;
let buy = applePrice + orangePrice ;
let GiveShopkeeper = 1000;
let resultShopekiper = GiveShopkeeper - buy;
console.log(resultShopekiper)




// Task-2
// Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.
// Input:
// The first line of the input is the marks of the five subjects mentioned above, respectively.
// Output:
// Print the result in 2 decimal places.
// Sample Input:
// 75.25, 65, 80, 35.45, 99.50

// Sample Output:
// 71.04
let Mathematics = 75.25;
let Biology = 65;
let Chemistry = 80;
let Physics = 35.45;
let Bangla = 99.50;
let sumSubject = Mathematics + Biology + Chemistry + Physics + Bangla
let avg = sumSubject / 5;
console.log(parseFloat(avg.toFixed(2)))


// Task-3
// You task is to divide the given number by 5 and show the remainder as the output.

// Input:
// The first line of the input contains the number.

// Output:
// Print the remainder.

// Sample Input:
// 119

// Sample Output:
// 4

let input = 119;
let rem = input % 5;    ``
console.log(rem)





// Task-4
// What will be the result of the following codes:

// var a = isNaN(‘11’);

// var a = isNaN(2-10);

// Explain your answers.


// var a = isNaN("mahin");
var a = isNaN(2-10);
// console.log(a)
