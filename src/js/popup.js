const popupDiv = document.querySelector(".popup");

const addInformBtn = document.getElementById("addInformBtn");
const popupNotActiveBtn = document.getElementById("popupNotActive");

const addInformData = ` 
    <img src="./src/images/notification.svg" alt="" />
    <p>
        Ваш хомяк работает ровно 24 часа, после чего он уснёт. Чтобы
        разбудить его и включить в работу на 24 часа, надо нажать на него.
        <br/>
        <br/>
        Вы можете нажимать по хомяку в любое время.Счётчик обновится.
    </p>`;

function activePopupDiv() {
  popupDiv.classList.toggle("active");
}

addInformBtn.addEventListener("click", () => {
  activePopupDiv();
});
popupNotActiveBtn.addEventListener("click", () => {
  activePopupDiv();
});
