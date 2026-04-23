let parent = document.querySelector(`.parent`);

// console.log(parent);
// console.log(parent.children);
// console.log(parent.children[1].innerHTML);
// console.log(parent.childNodes);

// for (let i = 0; i < parent.children.length; i++) {
//   console.log(parent.children[i].innerHTML);
// }

// parent.children[2].style.backgroundColor = "orange";

// console.log(parent.firstElementChild);
// console.log(parent.lastElementChild);

const day1 = document.querySelector(`.day`);
console.log(day1.parentElement);
console.log(day1.nextElementSibling);

console.log(`Nodes: `, parent.childNodes);