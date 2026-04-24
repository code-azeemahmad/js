let valid = null;

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

const changeColor = () => {
  document.body.style.backgroundColor = getRandomColor();
};

const startChangingColor = () => {
  if (valid !== null) return; // prevent multiple intervals
  valid = setInterval(changeColor, 1000);
}

const stopChangingColor = () => {
  clearInterval(valid);
  valid = null; // Clearing reference
}

const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");

if (startBtn && stopBtn) {
  startBtn.addEventListener("click", startChangingColor);
  stopBtn.addEventListener("click", stopChangingColor);
}
