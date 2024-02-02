/***

Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/



// let bill = 600;
// if(bill >= 500){
//     console.log(" Burger more than 500tk: free Coke")
// }else{
//     bill += 30;
//     console.log(`total bill ${bill}`)
// }








/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/


// let width = 60;
// let height = 65;

// let min = height * 0.0254
// // console.log(min)
// let BMI = width / min ** 2
// // console.log(BMI)

// // - BMI < 18.5, you are underweight.

// if(BMI < 18.5){
//     console.log("you are underweight.")
// }else if(BMI >= 18.5 && BMI <=24.9){
//     console.log(" you are normal.")
// }else if(BMI >=25 && BMI <= 29.9){
//     console.log("You are overheight")

// }else{
//     console.log(" you are obese.")
// }

/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

// let greater = 60;

// if(greater >= 90 && greater <= 100){
//     console.log("A")
// }
// else if(greater >= 80 && greater <= 89){
//     console.log("B")
// }

// else if(greater >= 70 && greater <= 79){
//     console.log("C")
// }

// else if(greater >= 60 && greater <= 69){
//     console.log("D")
// }
// else{
//     console.log("Fail")
// }



/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/

// let yourScore  = 80;
// let friendScore = 5;

// if(yourScore  >= 80){
//     if(friendScore >= 80 ){
//         console.log("Go for a lunch. ")
//     }
//     else if(friendScore >= 60){
//         console.log("good luck next time.")
//     }else if(friendScore >= 40){
//         console.log(" your friend's message unseen.")
//     }   else{
//         console.log(" block your friend")
//     }
// }else{
//     console.log("go to home and sleep and act sad")
// }








/***

you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.
*/

let num1 = 30;
let num2 = 20;
let result;

if(num1 >= num2){
    result = num1 + num1
}
else{
    result = num1 + num2
}

console.log(result)

// ternary oparetor
let terResult = num1 >= num2 ? num1 *2 : num1 + num2;
console.log(terResult)


/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/



let ticketPrice = 800;
let age = 20;
let student = false;
let discount;
if(age < 10){
    discount = `${ticketPrice} --- Children tiket free`
}else if(student){
    discount = ticketPrice - ticketPrice * 50 / 100;
}
else if(age >= 60){
    discount = ticketPrice - ticketPrice * 15 / 100;
}else{
    discount = `regular tiket ${ticketPrice}`
}
console.log(discount)