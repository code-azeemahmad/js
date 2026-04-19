// for each loop

const arr = [`js`, `c++`, `java`, `ruby`, `python`];

// forEach is a function stored in Array.prototype


// arr.forEach( function (val) {
//   console.log(val);
// })

arr.forEach((item) => {  // requires a callback function
  console.log(item);
});

// smart, it knows it is made to iterate arrays

const stack = [`HTML`, `CSS`, `JS`, `REACT`, `MERN`];

function printMe(item) {
  console.log(item);
}

stack.forEach(printMe); // provide reference, not execute

// for a specific use case
// arr.forEach((item, indexedDB, arr) => {
//   console.log(item, indexedDB, arr);
// })

const myCoding = [  // master this iteration
  {
    languageName: `javascript`,
    languageFileName: `js`,
  },
  {
    languageName: `python`,
    languageFileName: `py`,
  },
  {
    languageName: `ruby`,
    languageFileName: `rb`,
  }
];

// db returns an array of objects
myCoding.forEach((value) => {
  console.log(value.languageName);
  console.log(value.languageFileName);
})