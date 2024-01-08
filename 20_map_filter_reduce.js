/*forEach loop---calls a function, once for each array element

const { map } = require("node-g");

 const a = [1,2,3]
 a.forEach((value,inedex.array)=> {
    function
 })   */

/* map()--------Creates a new array by performing some operation on each array element
const a = [1,2,3]
a.map((value, index,array)=>{
    return value *value;
}) */

let array=[45,46,765]
array.map((value)=>{
    console.log(value)
})


let a=array.map((value,index,array)=>{
    console.log(value,index,array)
    // return value+1
    return value+index
})
console.log(a)


/* Array filter method:-------filters an array with values that passes a test creats a new array
const b= [1,2,3,3,4,5,5]
b.filter(greater_tan_5)  */

let array2=[4,23,5,87]
let c=array2.filter((value)=>{
    return value<10
})
console.log(c)


// reduce methods----reduce an array to a single value
let array3=[1,4,1,5,9,6,3]
let c1=array3.reduce((h1,h2)=>{
    return h1 + h2
})
console.log(c1)