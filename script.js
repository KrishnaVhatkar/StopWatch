let timerInterval;
let startTime = 0;
let running = false;
let elapsedTime = 0;

const timer = document.getElementById('timer');
const startStopButton = document.getElementById('startStop');
const resetButton = document.getElementById('reset');

function formatTime(ms) {

  const minutes = Math.floor((ms % 3600000) / 60000);
  const seconds = Math.floor((ms % 60000) / 1000);
  const mili = Math.floor((ms%1000)/10);
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${mili.toString().padStart(2,'0')}`;

  
}


function showDisplay() {
  const currentTime = elapsedTime + (running ? Date.now() - startTime : 0);
  timer.textContent = formatTime(currentTime);
}

function startStop() {
  if (running) {
    clearInterval(timerInterval);
    elapsedTime += Date.now() - startTime;
    running = false;
    startStopButton.textContent = 'Start';
  }
    else {
    startTime = Date.now();
    showDisplay();
    timerInterval = setInterval(showDisplay, 100);
    running = true;
    startStopButton.textContent = 'Stop';
  }
}

function reset() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  startTime = 0;
  timer.textContent = '00:00:00';
  running = false;
  startStopButton.textContent = 'Start';
 
}

startStopButton.addEventListener('click', startStop);
resetButton.addEventListener('click', reset);



