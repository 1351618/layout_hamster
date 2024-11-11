const pageClassAll = document.querySelectorAll(".page");
const pages = {
  0: document.querySelector(".pageHome"),
  1: document.querySelector(".pageTasks"),
  2: document.querySelector(".pagePartners"),
  4: document.querySelector(".pageSettings"),
};

let activePage;
let indexPage;

document.addEventListener("DOMContentLoaded", () => {
  const menuButtons = document.querySelectorAll(".menu-button");
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
  const menuButtons = document.querySelectorAll(".menu-button");
  menuButtons.forEach((btn) => btn.classList.remove("active"));
  menuButtons[indexPage].classList.add("active");
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
    console.log(`Rendering page: ${indexPage}`);
  }
}
