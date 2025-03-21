const startBtn = document.getElementById("startButton");
const timer = document.getElementById("timeInput");
const countDown = document.getElementById("countDown");
function startTimer() {
  let timerValue = parseInt(timer.value);

  if (isNaN(timerValue)) {
    countDown.innerText = "Please enter a valid number";
    return;
  }

  if (timerValue <= 0) {
    countDown.innerText = "Please enter seconds greater than 0";
    return;
  }
  setInterval(function () {
    timerValue--;
    countDown.innerText = `Timer remaining ${timerValue}`;
    if (timerValue == 0) {
      countDown.innerText = `Timer ended`;
      return;
    }
  }, 1000);
}

startBtn.addEventListener("click", startTimer);
