// fetch(`https://something.com`).then().catch().finally();

// Bluebird is a high-performance, fully featured Promise library for JavaScript

// A Promise is an object, requires a callback
// creating promise and consuming promise
const promise1 = new Promise(function(resolve, reject) {
  // do an async task(db calls, cryptography, network calls)
  setTimeout(function() {
    console.log(`Async Task is completed`);
    // to connect resolve and .then
    resolve();
  }, 1000);
});  

promise1.then(() => {
  console.log(`promise consumed`);
});

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(`Async Task 2`);
    resolve();
  }, 1000);
}).then(() => {
  console.log(`async 2 resolved`);
}).catch(() => {
  console.log(`async 2 rejected`);
})

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({username: 'azeem', email: 'azeem@google.com'})
  }, 1000);
});

// data passing from resolve to then
promise3.then((user) => {
  console.log(user);
});

const promise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({username: 'azeem', password: `123`});
    } else {
      reject(`Error! Something went wrong!`);
    }
  }, 1000);
});

// chaining
promise4.then((user) => { 
  console.log(user);
  return user.username;
}).then((username) => {
  console.log(username);
}).catch((error) => {
  console.log(error);
}).finally(() => console.log(`finally! prommise is either resolved or rejected`));

const promise5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({username: 'javascript', password: `stageno`});
    } else {
      reject(`Error! JS went wrong!`);
    }
  }, 1000);
});

// async function consumePromise5() { // error is error = true, wrap in try-catch
//   const response = await promise5;
//   console.log(response);
// }

async function consumePromise5() {
  try {
    const response = await promise5;
    console.log(response);
  } catch (error) { // gracefully error handled
    console.log(error);
  }
}

consumePromise5();

// actual usage

// async function getAllUsers() {
//   try {
//     const response = await fetch(`https://api.github.com/users/code-azeemahmad`);
//     // console.log(response);
//     const data = await response.json();   // important, it takes time to convert, so await
//     console.log(data);
//   } catch (error) {
//     console.log(`Error: `, error);
//   }
// }

// await getAllUsers();

const url = `https://api.github.com/users/code-azeemahmad`;
fetch(url)    // always returns a promise
.then((response) => {
  return response.json();   // returns a new promise, must be handled by another then 
}).then((res) => {
  console.log(res);
}).catch((error) => {
  console.log(error);
});

/*
response.json() is asynchronous
so it needs another .then() OR await
 */