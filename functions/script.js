function sayMyName() {
  console.log("A");
  console.log("Z");
  console.log("E");
  console.log("E");
  console.log("M");
}

sayMyName; // reference
// sayMyName(); // execution

// function addTwoNumbers(num1, num2) {    // parameters
//     console.log(num2 + num1);
// }

// addTwoNumbers();    // NaN
addTwoNumbers(3, 4);    // arguments
// addTwoNumbers(3, '4');
// addTwoNumbers(3, 'a');
// addTwoNumbers(3, null);

function addTwoNumbers(num1, num2) {
    return num1 + num2;
    // console.log(num1 + num2);   // unreachable code
}

const num3 = addTwoNumbers(3, 4);
console.log(num3);

function logInUserMessage(username) {
    if (username === undefined) {
        console.log("Please! Enter the username");
        return;
    }
    return `${username} just logged in`;
}

console.log(logInUserMessage('azeem'));
console.log(logInUserMessage());    // undefined just logged in, not null, use default parameters


// undefined and "" are assumed to be false