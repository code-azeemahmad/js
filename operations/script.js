let val = 3;
let negVal = -val;
console.log(negVal);

console.log(2+2);
console.log(2*4);
console.log(2**3);
console.log(8-2);
console.log(9/2);
console.log(9%2);

let str1 = "code-";
let str2 = "azeem";
let str3 = str1 + str2;
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

// + tries to convert value into a number
console.log(+true);
console.log(+"");

// let num1, num2, num3;
// num1 = num2 = num3 = 2 + 3;

let gameCounter = 100;
// gameCounter++;
++gameCounter;
console.log(gameCounter);

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"