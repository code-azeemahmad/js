const arr = [`js`, `c++`, `java`, `ruby`, `python`];

const result = arr.forEach((item) => {  // returns nothing
  process.stdout.write(item + `   `);
})

console.log(result);  // undefined
