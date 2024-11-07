const countdown = document.getElementById("countdown");

let countdownStartHour = 2;
let countdownStartMinute = 50;
let countdownTime = countdownStartHour * 60 * 60 + countdownStartMinute * 60;

function updateCountdown() {
  if (countdownTime > 0) {
    countdownTime--;

    const hours = Math.floor(countdownTime / 3600);
    const minutes = Math.floor((countdownTime % 3600) / 60);
    const seconds = countdownTime % 60;

    countdown.textContent = `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  } else {
    countdown.textContent = "00:00:00";
    clearInterval(timerInterval);
  }
}

const timerInterval = setInterval(updateCountdown, 1000);
