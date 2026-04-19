// ********* Object Destructuring ***********

const course = {
    name: "Javascript",
    price: 999,
    instructor: 'Hitesh',
}

// const instructor = course.instructor;
// console.log(instructor);
// console.log(course.instructor);

/* extract values from object, 
don't write Object.key to access a value */

// const {instructor} = course;    
// console.log(instructor);

const {instructor: inst} = course;  // renaming after object destructuring
console.log(inst);

// JSON (keys and values in strings)
/*{
    "name": 'azeem',
    "course": 'JS',
    "price": 'free',
}*/

// API can also return an array of objects
[
    {},
    {},
    {},
]