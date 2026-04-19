let a = 100;    // let and const are block scoped
// const b = 20;
var c = 300;    // var is global scoped

// {} is called scope

if (true) {
  let a = 10;
  const b = 20;
//   c = 30;
  console.log(`Inner: ${a}`);
}

console.log(a);
// console.log(b);
// console.log(c);

// scope in browser's console is different from scope in vs code using node
