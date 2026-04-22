const num = [1, 2, 3, 4, 5];

const sumTotal = num.reduce((acc, curr) => acc + curr, 0);

// const initialVal = 0;
// const sumTotal = num.reduce(function (accumulator, currentValue) {
//   let sum = accumulator + currentValue;
//   console.log(`acc: ${accumulator} and currVal: ${currentValue} and sumTotal: ${sum}`);
//   return sum;
// }, initialVal);

console.log(sumTotal);

const shoppingCart = [
  {
    itemName: `js course`,
    price: 2999,
  },
  {
    itemName: `react course`,
    price: 6999,
  },
  {
    itemName: `mern course`,
    price: 9999,
  },
];  

console.log(shoppingCart.reduce((acc, curr) => acc + curr.price, 0));