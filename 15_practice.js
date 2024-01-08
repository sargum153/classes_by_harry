// What will be the following print in JS :- console.log("her\"")

let str="her\""
console.log(str.length)

// Explore the includes, startwith and endwith function of a string.
//includes
const sentence='Never Compare your weakness to other People\'s Strengths.';
const word = 'People\'s';
console.log(sentence.includes(word));
console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`)

//startwith


//endwith


//03:- Wrte a program to convert a given string to lowercase.
let word1= "NEVER COMPARE YOUR WEAKNESSES TO OTHER PEOPLE\'S STRENGTHS";
console.log(word1.toLowerCase(word1))

//04 Extract the amount out of this string "Please give RS 1000"
let str2= "Please give RS 1000";
let amount = str2.slice("please give Rs ".length)
console.log(amount)

//
let str3= "Please give RS 1000";
let amount1 = str3.slice(15)
console.log(amount1)

//to know type of amount
console.log(Number.parseInt(str3.slice(15)))
console.log(typeof Number.parseInt(str3.slice(15)))

//05 Try to change 4th character of a given string were you able to do it?
let friend= "Shubhransu";
friend[3]="R"
console.log(friend)
// Ans:- friend will be not changed because srtings are immutable. 