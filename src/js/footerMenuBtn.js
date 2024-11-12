import { eventEmitter } from "./pageHome.js";

const pageClassAll = document.querySelectorAll(".page");
const pages = {
  0: document.querySelector(".pageHome"),
  1: document.querySelector(".pageTasks"),
  2: document.querySelector(".pagePartners"),
  4: document.querySelector(".pageSettings"),
};

let activePage;
let indexPage;
let boxShadowColor = "#8d51d4";

// Получаем цвет для стиля из события
eventEmitter.addEventListener("colorsChanged", (event) => {
  console.log("Изменения в объекте colors:", event.detail);
  boxShadowColor = event.detail.footerShadowColor; // Обновляем цвет тени
  boxShadowBtn(); // Обновляем тень кнопки
});

// Переносим menuButtons в глобальную область видимости
const menuButtons = document.querySelectorAll(".menu-button");

document.addEventListener("DOMContentLoaded", () => {
  const firstButton = menuButtons[0];

  activePage = firstButton.querySelector("p").textContent;
  indexPage = 0;
  firstButton.classList.add("active");
  pageRendering();

  menuButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      activePage = button.querySelector("p").textContent;
      indexPage = index;
      pageRendering();
    });
  });
});

function menuButtonActive() {
  // Удаляем активный класс у всех кнопок и добавляем только текущей
  menuButtons.forEach((btn) => {
    btn.classList.remove("active");
    btn.style.boxShadow = ""; // Сбрасываем тень
  });

  menuButtons[indexPage].classList.add("active");
  boxShadowBtn();
}

function boxShadowBtn() {
  // Назначаем тень для активной кнопки
  menuButtons[
    indexPage
  ].style.boxShadow = `0px -3px 12px ${boxShadowColor}, 0px -5px 19px ${boxShadowColor}`;
}

function HidenAllPage() {
  pageClassAll.forEach((page) => {
    page.classList.add("hiden");
  });
}

function pageRendering() {
  menuButtonActive();
  HidenAllPage();
  if (pages[indexPage]) {
    pages[indexPage].classList.remove("hiden");
  }
}
