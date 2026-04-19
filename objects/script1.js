// const tinderUser = new Object();
const tinderUser = {};  // modern, faster, shorter

tinderUser.id = "123abc";
tinderUser.name = "shanks";
tinderUser.loggedIn = false;

// console.log(tinderUser);

// nested object
const regularUser = {
    email: "regular@gmail.com",
    fullName: {
        userFullName: {
            firstName: "regular",
            lastName: "boy",
        },
    },
}

console.log(regularUser);
console.log(regularUser.fullName.userFullName.firstName);
// optional chaining - Prevents errors if a property is missing
console.log(regularUser.fullName?.userFullName.lastName);

let obj1 = {
    1: 'a',
    2: 'b',
}
let obj2 = {
    3: 'c',
    4: 'd',
}
let obj4 = {
    5: 'e',
    6: 'f',
}

// const obj3 = {obj1, obj2};   // problematic like arrays

// const returnedTarget = Object.assign(target, source);
// const obj3 = Object.assign({}, obj1, obj2);     

const obj3 = {...obj1, ...obj2};    // spread operator

// console.log(obj3);

const users = [ // array of objects returned from db
    {
        id: 1,
        email: 'a@a.com',
    },
    {

    },
    {

    },
    {

    },
];

console.log(users[0].email);

console.log(tinderUser);
console.log(Object.keys(tinderUser));   // return all keys in an array
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('loggedIn'));