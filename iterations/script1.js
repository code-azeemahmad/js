let i = 0;
while (i <= 10) {
  console.log(`Value of i is ${i}`);
  i = i + 2;
}

let j = 0;
let myArr = [`a`, `b`, `c`, `d`, `e`];
while (j < myArr.length) {
  console.log(myArr[j]);
  j++;
}

let score = 11;
do {
  console.log(`score is ${score}`); // runs once
  score++;
} while (score <= 10)