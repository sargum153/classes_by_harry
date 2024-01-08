//Loops in Javascript
// looping thorough array:- Array can be looped through using the classiclal JS FOR LOOP OR THRUGH SOME OTHER METHORDS DISCUSSED BELOW

let num=[3,54,67,34,1,3,2]
for(let i=0; i<num.length; i++){
    console.log(num[i])
}

//ForEach loop
let num1=[3,4,2,4]
num1.forEach((element)=> {
    console.log(element*element)
})

// Array From------used to create an array from any other object
let name="Sargum"
let name1=Array.from(name)
console.log(name1)

//For of----------fr of loop can be used to get the value from an array
let a=[1,2,3,4,5]
for(let i of a){
    console.log(i)
}


//for ... in loop-----for in lop can be used to get keys from an array
let a1=[1,2,3,4,5]
for(let i in a1){
    console.log(a1[i])
}