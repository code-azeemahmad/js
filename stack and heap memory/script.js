// STACK, primitive, call by value, changes made in copy
let name = "azeem";
let myName = name;
myName = "doctor";
console.log(name); 
console.log(myName);

// HEAP, non primitive, call by reference, changes made in original location

let userOne = {
    email: "azeem@code.com",
    api: "done",
}

let userTwo = userOne;
userTwo.email = "doctor@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);