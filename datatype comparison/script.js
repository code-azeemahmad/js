// console.log(2 > 3);
// console.log(2 <= 3);
// console.log(2 >= 3);
// console.log(2 < 3);
// console.log(2 != 3);
// console.log(2 == 3);

// but when you compare two different datatypes

console.log("2" > 1);
console.log("02" > 1);

// typescript does not allow to compare two different datatypes

console.log(null > 0, null == 0, null >= 0);

/*
The reason is that equality check == and comparison <> works differently.
Comparisons convert null to a number, treating it as 0.
Thats why null >= 0 is true and null > 0 is false.
*/

console.log(undefined == 0, undefined < 0, undefined > 0);

// avoid these comparisons because they always confuse you, write clean code

// strict check ===

console.log("2" == 2);
console.log("2" === 2);