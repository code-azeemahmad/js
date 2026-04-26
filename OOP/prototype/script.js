let myName = `azeem     `;
console.log(myName.trim().length);
// console.log(myName.trueLength());
// i want a method named trueLength that returns the true length of string excluding white spaces

let arrHero = [`luffy`, `shanks`, `mihawk`];

let heroPower = {
  luffy: `gum gum`,
  shanks: `haki`,
  mihawk: `sword`,

  getLuffyPower: function() {
    console.log(`luffy power is ${this.luffy}`);
  }
}

// heroPower.hitesh();
// can we inject a function named hitesh from our side?
// principle: array, function, string --> object --> null
// we pass a property through base (object) to function or arrays
// prototype will check the power from left to right if it exists

Object.prototype.hitesh = function() {
  console.log(`hitesh is present in all objects`);
}

// heroPower.hitesh();
arrHero.hitesh();

// question is if we give this power to array, will the power be passed to object?
// principle: array, function, string --> object --> null

Array.prototype.heyHitesh = function() {
  console.log(`Hitesh says hello`);
}

arrHero.heyHitesh();  // array has power
// heroPower.heyHitesh(); // underlying object has no


// inheritance
const user = {
  name: `chai`,
  email: `chai@google.com`,
}
const teacher = {
  makeVideo: true,
}

const teachingSupport = {
  isAvailable: false,
}

const TASupport = {
  makeAssignment: `JS Assignment`,
  fullTime: true,
  __proto__: teachingSupport,
}

teacher.__proto__ = user; // prototyple inheritance

// modern syntax
Object.setPrototypeOf(teachingSupport, teacher);


// beginning
let anotherUsername = `ChaiAurCode     `;
String.prototype.trueLength = function() {
  console.log(`${this}`); // anotherUsername has reference of ChaiAurCode
  console.log(`True Length is: ${this.trim().length}`);
}
 
// which reference is inside this? that who calls is this. That is this
anotherUsername.trueLength();
`hitesh`.trueLength();
`icetea`.trueLength();