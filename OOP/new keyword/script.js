// prototype behaviour of js

// prototype is the one - classes, this, new keyword are working through this
// arrow functions don't have access of this due to prototype
// prototyple inheritance

// at the end of the day, we say everything is an object in javascript
// properties available to object is also available to array, useable or not, its a different matter
/*
array --> object --> null
string --> object --> null
*/
// what about function

function multiplyBy5(num) {
  return num * 5;
}
multiplyBy5.power = 2;
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);
// function can be made to behave like an object
// function --> object --> null

function createUser(username, score) {
  this.username = username;
  this.score = score;
}

createUser.prototype.increment = function() {
  this.score++; // this --> increment that score who called you
}

createUser.prototype.printMe = function() {
  console.log(`Score is ${this.score}`);
}

// const chai = createUser(`chai`, 50);  // Cannot read properties of undefined (reading 'printMe')

const chai = new createUser(`chai`, 50);   // importance of new keyword (Score is 150)
const tea = createUser(`tea`, 150);

// you don't have to type prototype when manipulating array
// array.prototype.map()

chai.printMe();


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/