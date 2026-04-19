// for in loop

const myObj = {
  js: `Javascript`,
  cpp: `C++`,
  rb: `Ruby`,
  swift: `swift by apple`,
}

for (const key in myObj) {
  console.log(key, `:`, myObj[key]);
}

// Destructuring works on iterables that return structured values (like arrays)
for (const [key, value] of Object.entries(myObj)) {  
  console.log(key, `:-`, value);
}
// console.log(Object.entries(myObj));

// can for in loop be used for arrays?
const arr = [1, 2, 3, 4, 5];
for (const key in arr) {
  console.log(arr[key]);
}

/*
array = [1, 2, 3]
Internally it’s like:
{
  0: 1,
  1: 2,
  2: 3
}
So:
key → index (0,1,2,...)
value → actual element (1,2,3,...)
*/

/*
__________________________________________
| Loop       | Gives          | Best for |
| ---------- | -------------- | -------- |
| `for...in` | keys (indices) | objects  |
| `for...of` | values         | arrays   |
| `forEach`  | values         | arrays   |
|____________|________________|__________|
*/

// can for in loop be used for map?
let map = new Map();
map.set( `a`, `SHA-256`);
map.set( `b`, `cryptography`);
map.set( `c`, `steganography`);
map.set( `d`, `watermarking`);

for (const key in map) {  // use for of loop
  console.log(map[key]);
}
// for...in finds no enumerable keys
// Loop runs 0 times