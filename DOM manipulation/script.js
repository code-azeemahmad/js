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
title.innerHTML;  // returns the text + htmt
