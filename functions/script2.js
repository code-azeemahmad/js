const user = {
    username: "azeem",
    cash: 199,
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and Cash is ${anyObject.cash}`);
}

// handleObject(user);
handleObject({
    username: 'sammy',
    cash: 399,
})

const arr = [100, 200, 300, 400, 500];

function returnSecondValue(getArray) {
    return getArray[1];
}

// console.log(returnSecondValue(arr));
console.log(returnSecondValue([100, 200, 300, 400, 500]));