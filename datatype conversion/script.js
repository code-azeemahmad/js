// let score = "33";
// let score = "33abc";
// let score = null;
// let score = undefined;
let score = true;

console.log(typeof(score));
console.log(typeof score);

let valInNumber = Number(score);
console.log(typeof valInNumber);
console.log(valInNumber);       // NaN, dont rely on numbers

let isLoggedIn = [];
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// 1 => true
// "" => false
// "azeem" => true
// [] => true

let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber);

// let someNumber = 33;
// blank line as ouput