(function chai() {  // named iife
  console.log("DB connected!");
})();

//(function definition)(execution call)
/* problem occurs due to pollution in global scope, IIFE are used to remove pollution to global variables declaration */

((name) => {  // unnamed iife
  console.log(`DB connected 2 ${name}`);
})('california');

/* IIFE is invoked but does not know where to stop the context 
For this, put ; at the end of ()() */