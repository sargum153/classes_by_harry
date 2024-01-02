//  01:- use logical operators to find wheather the age of apersion lies between 10 and 20 ?

let age = prompt("What os your age")
age = Number.parseInt(age)
if (age >=10 && age <= 20){
    console.log("Your age lies between 10 to 20")

} else {
    console.log("yur age doesn't lies");
} 

// 02 :- Demonstrat the switch case statement in JS

let age1 = prompt("What is your age") 
switch(age1) {
    case "12":
        console.log("your age is 12")
        break;
        case "13":
        console.log("Your age is 13")
        break;
        case "14":
            console.log("Your age is 14")
            break;
            default: 
            console.log("Your age is not Special.") 
}

// 03:- Write aJS program to find whether a number is divisiable by 2 and 3.

let num = prompt("Enter number")
// let num=6
num = Number.parseInt(num);
if(num%2==0 && num%3==0){
    console.log("Your Number is Divisble by both 2 and 3")
} else {
    console.log("Your Number is not divisiable by 2 and 3")
}
// 04:- write a JS Program to find whether a number Divsible by either 2 or 3?

let num1 = 4
if (num1%2==0){
    console.log(`${num1} is divisible by 2`)
} else if(num1%3==0){
    console.log(`${num1} is divisible by 3`)
} else {
    console.log(`&{num1} is number is not dvisible by both 2 and 3`)
}

// 05:- Print "You can Drive" or "Yu can not Drive" based on age being greater than 18 using Ternary Opprater.

let age2 = 18
let a1 = age2 > 18? `You can Drive` : `you cann't Drive`
console.log(a1)