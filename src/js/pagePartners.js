const friendsList_Btn = document.querySelector(".partners_friends-list");
const backMainSection_Btn = document.querySelector(
  ".partners_back-main-section"
);

const sections = {
  0: document.getElementById("partners-partners"),
  1: document.getElementById("partners-friends"),
};

let pageSection = 0;

function hideAllSections() {
  Object.values(sections).forEach((section) => section.classList.add("hiden"));
}

function showSection() {
  hideAllSections();
  if (sections[pageSection]) {
    sections[pageSection].classList.remove("hiden");
  }
}

friendsList_Btn.addEventListener("click", () => {
  pageSection = 1;
  showSection();
});
backMainSection_Btn.addEventListener("click", () => {
  pageSection = 0;
  showSection();
});

showSection();
