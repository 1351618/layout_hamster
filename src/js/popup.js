const popupDiv = document.querySelector(".popup");

const addInformBtn = document.getElementById("addInformBtn");
const popupNotActiveBtn = document.getElementById("popupNotActive");

function activePopupDiv() {
  popupDiv.classList.toggle("active");
}

addInformBtn.addEventListener("click", () => {
  activePopupDiv();
});
popupNotActiveBtn.addEventListener("click", () => {
  activePopupDiv();
});
