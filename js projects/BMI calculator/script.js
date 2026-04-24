const form = document.querySelector(`form`);

// this use case will give empty value outside submit event, take values at the moment of submission
// const height = parseInt(document.getElementById(`height`).value);  X

// form submission type: `GET` or `POST`
// type values go to server at submission, stop it

form.addEventListener(`submit`, (e) => {
  e.preventDefault();

  const height = parseInt(document.getElementById(`height`).value);
  const weight = parseInt(document.getElementById(`weight`).value);
  const result = document.getElementById(`results`);

  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = `Please give a valid height! `
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please give a valid weight! `
  } else {
    const bmi = (weight / ((height*height)/10000)).toFixed(2);
    if (bmi < 18.6) {
      result.innerHTML = `<span>${bmi}, you are under weight</span>`;
    } else if (bmi > 24.9) {
      result.innerHTML = `<span>${bmi}, you are over weight</span>`;
    } else {
      result.innerHTML = `<span>${bmi}, you are normal</span>`;
    }
  }
});