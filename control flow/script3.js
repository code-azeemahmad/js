// Nullish Coalescing Operator ??

// ?? returns:
// Right value ONLY if left value is null or undefined

let val;
// val = 5 ?? 10;
// val = null ?? 10;
val = null ?? 40 ?? 20;
console.log(val);

