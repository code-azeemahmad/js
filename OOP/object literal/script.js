// object literal
const user = {
  username: `hitesh`,
  loginCount: 8,
  isSignedIn: true,

  getUserDetails: function() {
    // console.log(this); // this tell about current context
    return this.username;
  }
};

console.log(user.getUserDetails());
console.log(this);  // global context, returns window object in browser

// new keyword is a constructor function
// const promise1 = new Promise();
// const date = new Date();

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = () => {
    return `hello, ${this.username}`;
  }

  // you don't have to write, it is implicitly defined,
  // return this;
}

// const user1 = User(`azeem`, 10, true);
// const user2 = User(`coded`, 3, false);  // user2 overwrite user1 values
// console.log(user1);

// constructor function gives new instance(copy) each time, its up to you what you do with that copy, original or others ain't affected


const user1 = new User(`azeem`, 10, true);
const user2 = new User(`coded`, 3, false);
console.log(user1);
console.log(user2);

// new keyword working mechanism
// 1) generates a new empty object
// 2) constructor function is called due to new
// 3) arguments are injected into it due to this
// 4) you get inside function

console.log(user1.greeting());
console.log(user1.constructor); // reference to user