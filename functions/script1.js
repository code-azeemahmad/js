/* common situation, in case of shopping carts,
user continuously adds items and 
you don't know the no. of arguments 
coming and so the no. of parameters */

function calculateCartPrice(...num1) {  // rest operator - returns an array
    return num1;
}

console.log(calculateCartPrice(200, 300, 400));

function calculateCartPri(val1, val2, ...num1) {    // val1 = 200, val2 = 300, remaining(rest) = num1
    return num1;
}

console.log(calculateCartPri(200, 300, 500, 2000));


/* ...num is called rest operator and spread operator. 
They differ in their use case. */