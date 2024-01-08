let a = 1;
let b = 2;
let c = 3
console.log("One plus Avg of a and b is ", 1 + (a+b)/2)
console.log("One plus Avg of b and c is ", 1 + (b+c)/2)
console.log("One plus Avg of c and a is ", 1 + (c+a)/2)

// Using function
/* 
function myFunc(){
    code
}

function myFunc(para1, para2){
    code
} */


function onePlusAvg(x,y){
    return 1 + (x+y)/2
}
let a1 = 1;
let b1 = 2;
let c1 = 3;
console.log("One plus Avg of a nd b is ", onePlusAvg(a,b))
console.log("One plus Avg of b nd c is ", onePlusAvg(b,c))
console.log("One plus Avg of c nd a is ", onePlusAvg(c,a))

function onePlusAvg(x,y){
return Math.round(1 + (x + y)/2)
}

//02

const sum = (a,b) => {
    let c = a + b;
    return c
}

let y = sum (4,6)
console.log(y)

//03
const sum1 = (p,q)=> {
    return p+q
}
console.log(sum1(5,6))

//04
