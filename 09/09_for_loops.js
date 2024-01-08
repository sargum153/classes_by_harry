// Loops and Functon:- 
// For Loops:-
/*for (expression 1; expression 2; expression 3) {
    // code block to be executed
  } */
for(let i=0; i<5; i++){
    console.log(i)
}
for(let i=0; i<500; i++){
    console.log(i+2);
}

// Write a Program to add first n natural number
let sum=0
let n = prompt("Enter the value of n");
n=Number.parseInt(n);
for(let i=0; i<n; i++){
    sum += (i + 1)
    console.log((i+1),"+")
}
console.log("sum of first" +n+ "natural number is" + sum);

// Write a Sample program using For loops of your chice(Factorial calculation)









//Counting from 1 to 15:
for (let i=1; i<=15; i++){
    console.log(i)
}

//Printing even numbers from 2 to 10:
for (let i=2; i<=10; i+=2){
    console.log(i)
}

// Printing 3 to 50 which numbers are divisiable by 3:

for (i=3; i<=50; i+=3){
    console.log(i)
}

// 