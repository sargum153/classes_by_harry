// toString()
let num = [1,2,3,4,5,6,7,8,9]
let num2= num.toString() //num2 is now astring 
console.log(num2)

//join()
let a = [1,2,3]
// let a1=a.join("_")
let a1=a.join(" and ")
console.log(a1)

//pop() ---- remove last element frm the array
let b=[5,6,7,8]
let b1=b.pop()
console.log(b1)  // pop will be return removed element only
console.log(b1, b)

//push() ----Adds a new element at the end of the array.
let c=[5,3,7,2]
c.push(9)
console.log(c)


//shift() ----remove 1st element and return it 
let c1=[6,5,8]
let c2=c1.shift()
console.log(c2,c1)


//unshift()  ----- affs element to the beginning
let d1=[9,7,0]
let d2=d1.unshift(2)
console.log(d1,d2)


//deete()----Array element cen be deleted usng the delete operator
let fruits=['apple', 'grapes', 'kiwi', 'Banana', 'orange']
delete fruits[2]
console.log(fruits)