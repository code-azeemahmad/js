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