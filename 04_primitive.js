console.log("7 types of Primitive data type:- nn bb ss u")
let a = null;
let b = 345;
let c = true;
let d = BigInt("567") + BigInt("3");
let e = "Sargum";
let f = Symbol("i am a nice symbol");
let g = undefined;
console.log(a, b, c, d, e, f, g)
console.log(typeof a)

console.log("Non Primitive data type Object in JS")
const item={
    Sargum: true,
    Subha: false,
    Rahul: 67,
    Rohan: undefined
};
console.log(item["Rohan"])
console.log(item.Sargum)