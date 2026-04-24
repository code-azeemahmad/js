function addItem(para) {
  let li = document.createElement(`li`);
  li.innerText = `${para}`;
  document.querySelector(`.langauge`).appendChild(li);
}

addItem('python');
addItem('typescript');

function addOptimizedWay(langName) {  // you don't have to traverse the whole tree, that's why go for appendChild
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(langName));
  document.querySelector(`.langauge`).appendChild(li);
}

addOptimizedWay(`golang`);

// Edit

let nChild = document.querySelector('li:nth-child(2)');
// nChild.innerHTML = 'mojo';  // not optimized
const newLi = document.createElement(`li`);
newLi.textContent = `mojo`;
nChild.replaceWith(newLi);

nChild = document.querySelector(`li:nth-child(1)`);
nChild.outerHTML = `<li>java</li>`

// remove 

const lastLang = document.querySelector('li:last-child');
console.log(lastLang.innerHTML);
lastLang.remove();