const score = 300;

const balance = new Number(200);    // 100% confirmed that its a number

console.log(score);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));    // precision value

const otherNumber = 23.8799;
console.log(otherNumber.toPrecision(2));

const hundred = 1000000;
console.log(hundred.toLocaleString('en-IN'));

// Number.MIN_VALUE     Number.MAX_VALUE

console.log(Math.abs(-4));
console.log(Math.round(9.95));
console.log(Math.ceil(9.95));
console.log(Math.floor(9.95));
console.log(Math.min(4, 2, 3, 1));
console.log(Math.max(9, 3, 7, 2));

console.log(Math.random());       // return values between 0 and 1
console.log(Math.round(Math.random() * 100));
console.log(Math.floor(Math.random() * 10) + 1);   // to avoid zero case(0.1 -> 0)
const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
