// nested scope

function outer() {
  // closure
  let name = "Azeem";

  function inner() {
    const website = "Youtube";
    console.log(name); // accessible
  }
  inner();
  // console.log(website);
}

/*Inner function can access outer variables.
  This is called lexical scope*/

// one();

if (true) {
  const username = "azeem ";
  if (username === "azeem") {
    const website = "youtube";
    console.log(username + website);
  }
  // console.log(website);
}
// console.log(username);

addOne(1);
function addOne (num) {
  return num + 1;
}

// addTwo(1);
const addTwo = function (num) {   // Function Expression (assigned to variable)
  return num + 2;
};

/*________________________________________________________________
| Type                 | Hoisted? | Usable before definition?  |
| -------------------- | -------- | -------------------------  |
| Function declaration |   Yes    |           Yes              |
| Function expression  |   No     |           No               |
|______________________|__________|____________________________|
*/

/*
function addOne() → fully hoisted
const addTwo = function() → variable hoisted only (TDZ)
let/const → no access before declaration
*/