// for loop 
for (let i = 0; i < 5; i++) {
  console.log(`hello world`);
}

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    console.log(`Inner i ${i} and outer j ${j}`);
  }
}

for (let i = 1; i <= 10; i++) {
  console.log(`${3} * ${i} = ${3*i}`);
}

let myArr = [`shanks`, `luffy`, `newgate`, `law`, `buggy`];

for (let index = 0; index < myArr.length; index++) {
  const element = myArr[index];
  console.log(element);
}

// break and continue

for (let i = 1; i <= 20; i++) {
  console.log(i);
  if (i === 10) {
    break;
  }
}

for (let i = 1; i <= 20; i++) {
  if (i === 10) {
    continue;
  }
  console.log(i);
}