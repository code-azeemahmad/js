console.log(window);
console.log(window.document);
console.log(document);
console.dir(document);
console.log(document.baseURI);
console.log(document.links);

// https://excalidraw.com/#json=BkiviOCeWzc8Atu4kFmCh,H_VHYU6n90DCisFztXiGiQ

let title = document.getElementById(`title`);
title.id;
title.class;  // undefined
title.className;
title.getAttribute('id');
title.getAttribute('class');
title.setAttribute('class');
title.setAttribute('class', 'bg-green');  // overwrite previous attribute
title.setAttribute('class', 'heading bg-green');  // set multiple attributes

title.style.backgroundColor = 'green';
title.style.padding = '15px';
title.style.borderRadius = '10px';

title.innerText;  //  returns only the unhidden text
title.textContent;  // returns the entire text even if style="display: none;
title.innerHTML;  // returns the text + html

document.querySelector(`#title`);
document.querySelector(`.heading`);
document.querySelector(`p`);  // returns the first element that matches the specified CSS selector
document.querySelector(`input[type = 'password']`);

document.querySelector('ul li:first-child').style.backgroundColor = 'red';
document.querySelector('ul li:first-child').innerText = 'hello ul 1';

document.querySelectorAll('ul li'); // returns a node list(different from array, limited methods(no map, filter, reduce))
let arr = document.querySelectorAll('ul li');
arr[0].style.backgroundColor = 'green';
arr.forEach((c) => c.style.backgroundColor = 'red');

let h = document.querySelectorAll('h1');  // returns node list even for a single element
// h.style.backgroundColor = 'green';  // X
h[0].style.backgroundColor = 'green';


