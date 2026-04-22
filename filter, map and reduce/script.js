const arr = [`js`, `c++`, `java`, `ruby`, `python`];

const result = arr.forEach((item) => {  // returns nothing
  process.stdout.write(item + `   `);
})

console.log(result);  // undefined


// Filter -> return an array of values that meet the condition

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNums = myNums.filter((num) => (num > 4)); 
let newNums = myNums.filter((num) => {    // requires callback
  return num > 4;
}); 
console.log(newNums);

// same work can be done using for each
newNums = [];
myNums.forEach((num) => {
  if (num > 4) {
    newNums.push(num);
  }
})
console.log(newNums);


/*
_________________________________________________________________________________________
| Method    | Returns              | Purpose                         | Mutates Original |
| --------- | ---------------------| ------------------------------- | ---------------- |
| forEach   | undefined            | Perform side effects            |       No         |
| map       | new array (same len) | Transform each element          |       No         |
| filter    | new array (subset)   | Select elements by condition    |       No         |
|___________|______________________|_________________________________|__________________|
*/