import { eventEmitter } from "./pageHome.js";

const hamsterCircleOuterShadow = document.querySelector(".hamster-circle");
const hamsterCircleInnerShadow = document.querySelector(
  ".hamster-circle_inner-shadow"
);

const circleBar = document.getElementById("circleBar");
const circleBarCTX = circleBar.getContext("2d");

circleBar.height = 300;
circleBar.width = 300;

let percentage = 0;
let tern = true;
let circleColor = "#F843D6";

// Получаем цвет для стиля из события
eventEmitter.addEventListener("colorsChanged", (event) => {
  console.log("Изменения в объекте colors:", event.detail);
  circleColor = event.detail.circleColor;
  hamsterCircleOuterShadow.style.boxShadow = `0px 0px 60px ${event.detail.circleShadowColor}`;
  hamsterCircleInnerShadow.style.backgroundColor =
    event.detail.circleShadowColor;
});

function circleBarMov() {
  const angle = (percentage * Math.PI * 2) / 100;
  circleBarCTX.beginPath();
  circleBarCTX.arc(150, 150, 145, Math.PI / 2 + 0, Math.PI / 2 + angle);
  circleBarCTX.strokeStyle = circleColor;
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
