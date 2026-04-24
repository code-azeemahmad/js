// const sayDate = () => {
//   console.log(`azeem`, Date.now());
// }
// setInterval(sayDate, 2000);

// const sayDate = (str) => {
//   console.log(str, Date.now());
// }
// const intervalId = setInterval(sayDate, 2000, 'hello');
// clearInterval(intervalId);

let valid;
const sayDate = () => {
  console.log(`hello time is`, Date.now());
}
document.querySelector(`#start`).addEventListener(`click`, () => {
  console.log(`start`);
  valid = setInterval(sayDate, 2000);
});
document.querySelector(`#stop`).addEventListener(`click`, () => {
  console.log(`stop`);
  clearInterval(valid);
});