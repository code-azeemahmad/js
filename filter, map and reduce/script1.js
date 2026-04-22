const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const newNum = myNums.map((x) => x + 10);
const newNum = myNums.map((num) => {
  return num * 10;
});

// let tempNum = [];
// myNums.forEach((x) => {
//   tempNum.push(x*10);
// })

// chaining (result of first chain is passed to second chain)
const modNum = myNums.map((num) => num * 10).map((num) => num + 1).filter((num) => num > 50);

console.log(modNum);