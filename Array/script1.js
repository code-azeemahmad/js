const onePiece = ['luffy', 'teach', 'newgate', 'shanks', 'law'];
const demonSlayer = ['shinobu', 'tokito', 'sanemi', 'tomioka'];

// onePiece.push(demonSlayer);
// console.log(onePiece[5][2]);

const oneSlayer1 = onePiece.concat(demonSlayer); // returns new array
// console.log(oneSlayer1);

// spread operator
const oneSlayer2 = [...onePiece, ...demonSlayer];
console.log(oneSlayer2);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [8, 9, [10, 11], ], ];

const useableArray = anotherArray.flat(3);  // Infinity 
console.log(useableArray);

console.log(Array.isArray("Azeem"));
console.log(Array.from("Azeem"));
console.log(Array.from({name: 'azeem'}));   // interesting case

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));


