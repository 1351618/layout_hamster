const pageClassAll = document.querySelectorAll(".page");
const pageHome_div = document.querySelector(".pageHome");
const pageSettings_div = document.querySelector(".pageSettings");

let activePage;
let indexPage;

document.addEventListener("DOMContentLoaded", () => {
  const firstButton = document.querySelector(".menu-button");
  activePage = firstButton.querySelector("p").textContent;

  indexPage = 0;
  firstButton.classList.add("active");
  pageRendering();

  document.querySelectorAll(".menu-button").forEach((button, index) => {
    button.addEventListener("click", () => {
      activePage = button.querySelector("p").textContent;
      indexPage = index;
      pageRendering();
    });
  });
});

function menuButtonActive() {
  document
    .querySelectorAll(".menu-button")
    .forEach((btn) => btn.classList.remove("active"));
  document.querySelectorAll(".menu-button")[indexPage].classList.add("active");
}

function HidenAllPage() {
  pageClassAll.forEach((page) => {
    page.classList.add("hiden");
  });
}

function pageHome() {
  console.log("pageHome");
  pageHome_div.classList.remove("hiden");
}
function pageSettings() {
  console.log("pageSettings");
  pageSettings_div.classList.remove("hiden");
}

function pageRendering() {
  menuButtonActive();
  HidenAllPage();
  if (indexPage === 0) pageHome();
  if (indexPage === 4) pageSettings();
}
