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

let factors=0
let n1 = prompt("Enter the value of n1");
n1 = Number.parseInt(n1)
for(i=0; i<=n1; i++){
    if(n1 % i == 0){
        factors.push(i)
    }

}
return factors
