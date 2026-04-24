// let body = document.body;
// console.log(body);

// let grey = document.getElementById(`grey`);
// let white = document.getElementById(`white`);
// let blue = document.getElementById(`blue`);
// let yellow = document.getElementById(`yellow`);

// grey.addEventListener(`click`, () => {
//   body.style.backgroundColor = `grey`;
// });
// white.addEventListener(`click`, () => {
//   body.style.backgroundColor = `white`;
// });
// blue.addEventListener(`click`, () => {
//   body.style.backgroundColor = `blue`;
// });
// yellow.addEventListener(`click`, () => {
//   body.style.backgroundColor = `yellow`;
// });


// more optimized, modular and scalable, no redundancy
let body = document.body;
let buttons = document.querySelectorAll(`.button`);
buttons.forEach((button) => {
  button.addEventListener(`click`, (e) => {
    console.log(e.target.id);
    body.style.backgroundColor = e.target.id;
  });
});



// event delegation