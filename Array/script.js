// arrays in js - mixed, resizeable, 0 indexed, create shallow copies

const arr = [0, 1, 2, 'azeem', {langauge: 'c++'}];
const heroes = ['ironman', 'spiderman', 'thor', 'hulk', 'law', 'newgate', 'toji'];

const arr2 = new Array(1, 2, 3, 'azeem', {langauge: 'c++'});

console.log(arr);

// array methods

arr.push("hello");
console.log(arr[arr.length-1]);
console.log(arr);
arr.pop();
console.log(arr);
arr.unshift(99);
console.log(arr);
arr.shift();
console.log(arr);

console.log(arr.includes('azeem'));
console.log(arr.indexOf(2));

const newArr = arr.join();      // string

console.log(arr);
console.log(newArr);

console.log("_______________________________");

// slice, splice

console.log("A ", heroes);

// Returns a new array. Does NOT modify original array
const myArr1 = heroes.slice(0, 3);      // array.slice(start, end)
console.log("A ", heroes);
console.log("B ", myArr1);

// Modifies original array. Returns removed elements
const myArr2 = heroes.splice(0, 5);     // array.splice(start, deleteCount)
console.log("A ", heroes);
console.log("C ", myArr2);
