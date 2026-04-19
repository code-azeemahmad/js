// const chai = function() {
//   let username = "azeem";
//   console.log(this); // not empty object
// }

const chai = () => {
  let username = "azeem";
  console.log(this);  // {}
}


// chai();

/*
arrow function - does NOT have its own this
it takes this from surrounding lexical scope
 */

// basic arrow function (explicit return)
const add_ = (num1, num2) => {
  return num1 + num2;
}

// implicit return
// const add = (num1, num2) => num1 + num2;
// const add = (num1, num2) => (num1 + num2);
// to return an object, object must be implicitly enclosed in round braces
// const obj = () => {username: "azeem"}; // undefined
const obj = () => ({username: "azeem"});

// console.log(add(2, 4));
console.log(obj());


/*
{
  return keyword
}
( no return keyword)
*/