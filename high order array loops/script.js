// array specific loops
[``, ``, ``, ``]
[{}, {}, {}, {}]

// for of loop

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
  console.log(num);  
}

const greetings = `hello world`;
for (const greet of greetings) {
  if (greet === ` `)  continue;
  console.log(greet);
}

/*
map object - holds key value pairs, remember original order, keys are unique
*/

let map = new Map();
map.set( `a`, `SHA-256`);
map.set( `b`, `cryptography`);
map.set( `c`, `steganography`);
map.set( `d`, `watermarking`);
console.log(map.get(`a`));
map.set(`a`, `obfuscation`);
console.log(map.get(`a`));
console.log(map.size);
map.delete(`a`);
console.log(map.size);
// console.log(map);

// for (const key of map) {
//   console.log(key);
// }

for (const [key, value] of map) {
  console.log(key, `:-`, value);
}

const myObj = {
  game1: `genshin`,
  game2: `valorant`,
}

// for (const [key, value] of myObj) {
//   console.log(key);
// }  // not working, myObj is not iterable