const bust_Btn = document.getElementById("centr-extraction-bust_Btn");
const balanceReplenish_Btn = document.querySelector(
  ".top_balance__right-replenish"
);
const balanceWithdraw_Btn = document.querySelector(
  ".top_balance__right-withdraw"
);

const centerTopBlock = {
  centrExtraction: document.querySelector(".centr_extraction"),
  centrWell: document.querySelector(".centr-well"),
  hireHamster_btn: document.querySelector(".hire-hamster-btn"),
  centerHamsterSleep: document.querySelector(".center_hamster-sleep"),
  centrBoostRefill: document.querySelector(".centr-boost-refill"),
  centerHamsterGot: document.getElementById("centerHamsterGot"),
  hireHamsterTerms_btn: document.querySelector(".hire-hamster-terms-btn"),
  hamsterCircle: document.querySelector(".hamster-circle"),
  replenishSection: document.querySelector(".replenish"),
  withdrawSection: document.querySelector(".withdraw"),
  centerSection: document.querySelector(".center"),
};
const hamsterImg = {
  hNormal: document.querySelector(".hamster-normal"),
  hBust: document.querySelector(".hamster-bust"),
};

const eventEmitter = new EventTarget();

// Инициализация объекта с цветами
const colors = {
  circleColor: "#F843D6",
  circleShadowColor: "#8d51d4",
  footerShadowColor: "#541fa5b3",
};

let hamsterBust = false;

/** home | clickBtnBust  | replenish | withdraw*/
let topBlockActive = "home";
let hamsterImgActive = "hNormal";

function hamsterImgHiden() {
  Object.values(centerTopBlock).forEach((element) => {
    element.classList.add("hiden");
  });
  Object.values(hamsterImg).forEach((element) => {
    element.classList.add("hiden");
  });
}
function centerTopBlockShow() {
  if (topBlockActive === "home") {
    centerTopBlock["centerSection"].classList.remove("hiden");
    centerTopBlock["hamsterCircle"].classList.remove("hiden");
    centerTopBlock["centrExtraction"].classList.remove("hiden");
    centerTopBlock["centerHamsterGot"].classList.remove("hiden");
    centerTopBlock["centerHamsterSleep"].classList.remove("hiden");
  }
  if (topBlockActive === "clickBtnBust") {
    centerTopBlock["centerSection"].classList.remove("hiden");
    centerTopBlock["hamsterCircle"].classList.remove("hiden");
    centerTopBlock["centrWell"].classList.remove("hiden");
    centerTopBlock["hireHamster_btn"].classList.remove("hiden");
    centerTopBlock["centrBoostRefill"].classList.remove("hiden");
    centerTopBlock["hireHamsterTerms_btn"].classList.remove("hiden");
  }
  if (topBlockActive === "replenish") {
    centerTopBlock["replenishSection"].classList.remove("hiden");
  }
  if (topBlockActive === "withdraw") {
    centerTopBlock["withdrawSection"].classList.remove("hiden");
  }
}

function hamsterImgShow() {
  hamsterImgHiden();
  if (hamsterImg[hamsterImgActive]) {
    hamsterImg[hamsterImgActive].classList.remove("hiden");
  }
}

bust_Btn.addEventListener("click", () => {
  topBlockActive = "clickBtnBust";
  hamsterImgActive = "hBust";
  hamsterImgShow();
  centerTopBlockShow();
  colorAssignment();
});

function colorAssignment() {
  if (hamsterBust) {
    updateColors("#e9a433", "#ffc1079c", "#c47410b3");
  }
}

balanceReplenish_Btn.addEventListener("click", () => {
  console.log("пополнить");
  topBlockActive = "replenish";
  hamsterImgShow();
  centerTopBlockShow();
});
balanceWithdraw_Btn.addEventListener("click", () => {
  console.log("вывести");
  topBlockActive = "withdraw";
  hamsterImgShow();
  centerTopBlockShow();
});

centerTopBlock["hireHamster_btn"].addEventListener("click", () => {
  hamsterBust = true;
  topBlockActive = "home";
  hamsterImgShow();
  colorAssignment();
  centerTopBlockShow();
});

// Функция для изменения переменной и генерации события
function updateColors(circleColor, circleShadowColor, newCircleColor) {
  colors.circleColor = circleColor;
  colors.circleShadowColor = circleShadowColor;
  colors.footerShadowColor = newCircleColor;

  // Создаем и генерируем событие, передавая весь объект colors
  const event = new CustomEvent("colorsChanged", { detail: colors });
  eventEmitter.dispatchEvent(event);
}

export { eventEmitter, colors };

hamsterImgShow();
centerTopBlockShow();
