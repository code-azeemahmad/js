// Truthy and Falsy

// const userEmail = `azeem@azeem.com`;  // truthy
// const userEmail =  ``; // falsy
const userEmail = [];

if (userEmail) {
  console.log(`Gotcha boy!`);
} else {
  console.log(`Did not get it you fool!`);
}

/*
Falsy Values
false, 0, "", -0, BigInt 0n, null, undefined, NaN
*/

/*
Truthy Values
truth, "0", 'false', " ", [], {}, function(){}
*/

if (userEmail.length === 0) {
  console.log(`Array is empty`);
}

const emptyObject = {};

if (Object.keys(emptyObject).length === 0) {
  console.log(`Object is empty`);
}

/*
false == 0
true
false == ''
true
0 == ''
true
 */