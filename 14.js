//String Properties and method:-

let name = "Sargum"

let name1= "sargum\'s"
console.log(name.length)
console.log(name1.length)

//upper cash
let name2= "sargum";
console.log(name2.toUpperCase(name2))

//Lower cash
let name3= "sarguM";
console.log(name3.toLowerCase(name3))


 //04 and 05 slice
 let name4= "sargum";
 console.log(name4.slice(2,4))
console.log(name4.slice(2))

//06 replace
let name5= "Sargum Mohanty";
console.log(name5.replace("Mohanty", "Mishra"))

//07 concat
let name6= "Sargum"
let name7="Mohanty"
console.log(name6.concat( name7 ," yes"))

//08 trim
let name8= "sargum    "
console.log(name8.trim())


//Writr a program Use a for loop to print a string
let myString=prompt("Enter a string:");
for (let i=0; i<myString.length; i++){
    console.log(myString)
}

let myString1=prompt("Enter a string:");
if(myString1!==null && myString1!==""){
    for(let i=0; i<myString1.length; i++){
        console.log(myString1[i]);
    }
} else {
    console.log("You didn't enter anything")
}