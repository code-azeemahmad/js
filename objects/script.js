// Two ways to declare objects: 1)Constructors(singleton), 2)Literals(no singleton)
// Objects created using constructors are NOT automatically singletons

// Object.create

// Object Literals

const mySymbol1 = Symbol("Key1");

const JsUser = {
    name: "azeem",
    "full name": "code-azeem",  // can't access key with .
    age: 21,
    // mySymbol1: "myKey1",
    [mySymbol1]: "myKey1",  // enclose Symbol in [] to store Symbol as key
    location: 'chicago',
    email: "azeem@google.com",
    isLoggedIn: false,
    lastLogInDays: ['Mon', 'Wed'],
};

console.log(JsUser.name);
// console.log(JsUser[email]);  X
console.log(JsUser["email"]); // keys are treated as strings
console.log(JsUser["full name"]);

// store Symbol as key in Object (interview important)
// console.log(JsUser["mySymbol1"]);
// console.log(typeof JsUser["mySymbol1"]);    // String
console.log(JsUser[mySymbol1]);  // access Symbol without ""

JsUser.email = "azeem@chatGPT.com";
console.log(JsUser["email"]);

// lock the key-value in an object to stop modify
// Object.freeze(JsUser);
JsUser.email = "azeem@microsoft.com";
console.log(JsUser["email"]);

console.log(JsUser);

JsUser.greeting = function() {
    console.log("hello js i love coffee");
}

// console.log(JsUser.greeting);    // return function reference
JsUser.greeting();

JsUser.greetingTwo = function() {
    console.log(`Hello JS User, ${this.name}`);     // this. to access object keys
}

console.log(JsUser.greetingTwo());  // when you wrap function call in console.log(), if function does not return anything, it returns undefined