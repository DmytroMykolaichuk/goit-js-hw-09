const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.querySelector('body');
let intervalId = null;

startBtn.addEventListener('click', changeBackground)
stopBtn.addEventListener('click',stopChangeBackground)
stopBtn.disabled = true;


function changeBackground() {
    body.style.backgroundColor = getRandomHexColor();

    intervalId = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor();
    },1000)
    
    startBtn.disabled = true;
    stopBtn.disabled = false;
}

function stopChangeBackground() {
    stopBtn.disabled = true;
    startBtn.disabled = false;
    clearInterval(intervalId)
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
