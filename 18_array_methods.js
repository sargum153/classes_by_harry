let num = [1,2,3,4,5,6,7,8,9]
delete num[0]
console.log(num)
console.log(num.length)

//concat()------used to join array to the given array
let a=[1,2,3];
let a1=[4,5,6];
let a2=[7,8,9]
a3=a.concat(a1,a2)
console.log(a3)
console.log(a,a1)


//bort()--------sort()--------method is used to sort an array alphabetically
let b=[32,55,112,56,87,39,12,567]
b.sort()
console.log(b)

//Descending Order
let b1=[32,55,112,56,87,39,12,567]
b1.sort((a,b)=>b-a);
console.log(b1)

//Ascending rder
let c=[32,55,112,56,87,39,12,567]
c.sort((a,b)=>a-b);
console.log(c)


//reverse() ----------- Reverse the elements in the source array
let c1=[32,55,112,56,87,39,12,567]
c1.reverse()
console.log(c1)




//splice-------splice can be use to add a new items to an array
let num1=[76,56,76,97,80]
let deleteValue=num1.splice(1,2,3,4)
console.log(deleteValue)
console.log(num1)

//slice()-----slice out a peice from an array. it creats a new array.
let num2=[76,56,76,97,80]
let newnum= num2.slice(2, 4)
console.log(num2)
console.log(newnum)