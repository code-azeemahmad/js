const div = document.createElement(`div`);
  
  // div.className = `main`;
  // div.id = `myId`;
  // div.id = Math.round(Math.random() * 10 + 1);

  div.setAttribute(`class`, `heading`);
  div.style.backgroundColor = 'green';
  div.style.padding = '15px';

  // div.innerText = 'Code-Azeem';
  const addText = document.createTextNode("Code-Azeem");
  div.appendChild(addText);
  document.body.appendChild(div);
  console.log(div);