//01 :- Write a program to print the marks of student in an object using for loops.

let marks = {
    Sargum: 69,
    Shubhransu : 90,
    Akash: 7
}

for (let i=0; i< Object.keys(marks).length; i++){
    console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]]);
}

//02 :- Write a program to print the marks of student in an object using for in loops.
for(let key in marks){
    console.log("The marks of " + key + marks[key])
}

//03 write a program to print "try again " until the user enter the correct number.

// let cn=43
let i;
while(i !=cn){
    console.log("Try Again")
    i = prompt("Enter a Numebr")
}

console.log("You have enter acorrect Number")

//04 Write a Function to find mean of 5 Number.

function calculateMean(a, b, c, d, e){
    let sum = a + b + c + d + e;
    let mean = sum/5;
    return mean;
}
console.log("Mean: ",calculateMean(20,30,50,60,60) )

