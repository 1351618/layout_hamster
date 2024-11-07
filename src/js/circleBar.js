const circleBar = document.getElementById("circleBar");
const circleBarCTX = circleBar.getContext("2d");

circleBar.height = 300;
circleBar.width = 300;

let percentage = 0;
let tern = true;

function circleBarMov() {
  const angle = (percentage * Math.PI * 2) / 100;
  circleBarCTX.beginPath();
  circleBarCTX.arc(150, 150, 145, Math.PI / 2 + 0, Math.PI / 2 + angle);
  circleBarCTX.strokeStyle = "#F843D6";
  circleBarCTX.lineWidth = 10;
  circleBarCTX.lineCap = "round";
  circleBarCTX.stroke();
}

setInterval(() => {
  circleBarCTX.clearRect(0, 0, circleBar.width, circleBar.height);
  if (percentage >= 100) tern = false;
  if (percentage <= 0) tern = true;
  tern ? (percentage += 0.1) : (percentage -= 0.1); // Шаг  0.1
  circleBarMov();
}, 100);
