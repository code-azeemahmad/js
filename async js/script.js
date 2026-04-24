// setTimeout etc functions you get through browser, are not part of core js
// setTimeout(() => {
//   console.log(`azeem`);
// }, 2000);

const sayName = () => { // handler
  console.log(`azeem`);
};

const changeText = () => {
  document.querySelector(`h1`).innerText = `best js series`;
}

const stopMe = setTimeout(changeText, 2000);

// but if I want to stop the event before the timeout

document.querySelector(`#stop`).addEventListener(`click`, () => {
  clearTimeout(stopMe);
  console.log(`stopped`);
});