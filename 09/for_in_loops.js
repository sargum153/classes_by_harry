/*Syntax :- For (Key in Object) {
    code to be executed
} */

let obj = {
    Sargum : 69,
    Shubhransu : 90,
    Shiv : 35
}

for(let a in obj){
    console.log(a)
    console.log("marks of " + a + " are " + obj[a])
}

// note:- For-in-loops also works with arrays which will be discussed in the later values