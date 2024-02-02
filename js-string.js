// // Task-1:
// // Count how many times a string has the letter a
// let p = "Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph."
// // let match = p.match(/a/gi)
// // console.log(match.length)
// // let count = 0;
// // for(let i =0; i<p.length; i++){
// //     if(p[i] === "a"){
// //         count++;
// //     }
// // }
// // console.log(count)

// // Task-2:
// // Count how many times a string has the letter a or A
// let pp = "Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph. A"
// let i = 0;
// let count = 0;
// while(i<pp.length){
//     if(pp[i] === "a" || pp[i] ==="A"){
//         count++;  
//     }
//     i++;
// }
// console.log(count)

// let match = pp.match(/a|A|b/g)
// let array =[ [match.length],[match.length]];
// console.log(array.flat())


// // Task-3:
// // Check whether a string contains all the vowels a, e, i, o, u

// let ppp = "Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph. A";
// let vowels = ['a', 'e', 'i', 'o', 'u'];
// let containsAllVowels = true;
// for(let vowel of vowels){
//     if(!ppp.toLowerCase().includes(vowel)){
//         containsAllVowels = false;
//         break;
//     }
// }

// if(containsAllVowels) {
//     console.log("The string contains all the vowels (a, e, i, o, u).");
// } 

// else {
//     console.log("The string does not contain all the vowels (a, e, i, o, u).");
// }





// // let vowels = "aeiou"
// // let checked = true;
// // for(i=0; i<vowels.length; i++){
// //     if(ppp.indexOf(vowels[i]) !== -1){
// //         checked = true
// //     }else{
// //         checked = false;
// //         break;
// //     }
// // }
// // if(checked){
// //     console.log("vowel pawa gece")
// // }else{
// //     console.log("vowel not match")
// // }







// // Task-4:
// // If a given string has either x, replace x by y. if the given string has X, replace it by Y.

// // Hint: You should be able to check whether x or X exists. After that, search online how to replace a character in a string.


// let pppp = "Paragraphs x x X";

// let rep = pppp.replace(/x/g, "X").replace(/y/g,"Y");
// console.log(rep)


// Task-5:
// Capitalize Every first Letter of each word in a String

let ppppp = "capitalize Every first Letter of each word in a String";
let split = ppppp.split(" ") ;
console.log(split)
let capitalize = "";
for(let i =0; i<split.length; i++){
    let p = split[i] + " ";
    console.log(p)
    capitalize += p.charAt(0).toUpperCase() + p.slice(1)
}
console.log(capitalize)