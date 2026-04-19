// this refers to current context
const user = {
  username: "Azeem",
  price: 999,
  greet: function() {
    console.log(`${this.username}, Welcome to the website`);
    console.log(this);  // refers to the current object
  },
}
// user.greet();
// user.username = "Sammy";
// user.greet();

// console.log(this);  
/* {}, current context is empty. 
this refers to an empty object, 
we are in node environment */
// global object in browser is window

function fun() {
  // console.log(this);
  let username = "azeem";
  console.log(this.username); // undefined, works only in object, we can't use this in functions
}

// fun();


