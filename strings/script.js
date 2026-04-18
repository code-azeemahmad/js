const name = "azeem";

const repoCount = 50;

// console.log(name + repoCount + " Value");
console.log(`hello! my name is ${name} and my repo count is ${repoCount}`);     // string interpolation

const gameName = new String("valorant");
console.log(gameName);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());    // does not change oiginal string(stack, primitive)

console.log(gameName.charAt(2));
console.log(gameName.indexOf('l'));

const newString = gameName.substring(0, 3);
console.log(newString);

const anotherString = gameName.slice(-8, 3);
console.log(anotherString);

const trimString = "      doctor      ";
console.log(trimString);
console.log(trimString.trim());

const url = "https://azeem.com/azeem%20doctor";
console.log(url.replace('%20', '-'));
console.log(url.includes('azeem'));

const newGameName = "forza horizon 5"
console.log(newGameName.split(' ', 3));