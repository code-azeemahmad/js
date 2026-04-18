// primitive, call by value

// 7 types: string, number, boolean, undefined, null, symbol, bigint

// JS is dynamically typed language
const score = 100;  // we did not declare it a string or a number
const scoreVal = 100.5;
const isLoggedIn = false;
const outsideTemp = null;
let userEmail = undefined;

const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id === anotherId);

const bigInt = 1234567890123456789012345678901234567890n;
console.log(bigInt);

// non primitive, call by refrence, return object datatype

// 3 types: Array, Objects, functions

const heros = ["law", "teach", "luffy", "shanks"];

let myObj = {
    name: "azeem",
    age: 22,
}

const myFunc = function() {
    console.log("hello, world!");
}

console.log(typeof myFunc);     // function object
