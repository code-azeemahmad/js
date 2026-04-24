// js is a sequentially run language
// do not inject events in html, not feasible
// react is scalable code

// let owl = document.getElementById(`owl`);
// Works but not scalable
// owl.onclick = () => alert(`hello owl`);   // onclick is a property, not a function

// owl.addEventListener('click', () => {
//   alert(`hello owl`)
// }, false);

// attachEvent
// JQuery

// owl.addEventListener("click", (e) => {
//   // console.log(e);
// });
// type, timestamps, defaultPrevented, target, toElement, srcElement, currentTarget
// clientX, clientY, screenX, screenY, screenOffset,
// altKey, ctrlKey, shiftKey, keyCode

// Event Propagation(bubbling and capturing)

// document.getElementById(`images`).addEventListener(`click`, (e) => {
//   // console.log(`clicked inside the ul`);
// }, false);
// document.getElementById(`owl`).addEventListener(`click`, (e) => {
//   // console.log(`clicked inside the owl`);
//   e.stopPropagation();  // stop propagation
// }, false);

// there is a default third parameter whose default value is false, determines event bubbling and capturing
/*
____________________________________________________
| Value             | Phase     | Direction        |
| ----------------- | --------- | ---------------- |
| `false` (default) | Bubbling  | inside → outside |
| `true`            | Capturing | outside → inside |
|___________________|___________|__________________|
*/
// in modern js, the third parameter is called 'Event Listener Options Object', is an object

// document.getElementById(`google`).addEventListener(`click`, (e) => {
//   e.preventDefault();
//   e.stopPropagation();
//   // console.log(`google clicked`);
// }, false);

/*
preventDefault() overrides EVERYTHING in default behavior
you use it when you want to take control away from the browser and give it to JavaScript.
Without preventDefault:
Submit → page reloads → data lost
With preventDefault:
form.addEventListener("submit", (e) => {
  e.preventDefault();
  // validate + send data via JS
});
*/


// Event Delegation + Dynamic Element Removal

document.querySelector('#images').addEventListener(`click`, (e) => {
  // console.log(e);
  // console.log(e.target); // img → parentNode → li
  // console.log(e.target.tagName); 
  if (e.target.tagName === `IMG`) {
    console.log(e.target.id);
    let removeIt = e.target.parentNode;
    removeIt.remove();
  }
  // removeIt.parentNode.removeChild(removeIt);
});

