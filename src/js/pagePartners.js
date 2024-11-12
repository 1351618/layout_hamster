const friendsList_Btn = document.querySelector(".partners_friends-list");
const backMainSection_Btn = document.querySelector(
  ".partners_back-main-section"
);
const friendsWithdrawal_Div = document.querySelector(
  ".partners-friends_friends-withdrawal"
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

document.addEventListener("DOMContentLoaded", () => {
  // Изначально скрываем все секции и отображаем нужную
  showSection();

  friendsList_Btn.addEventListener("click", () => {
    pageSection = 1;
    showSection();
  });

  backMainSection_Btn.addEventListener("click", () => {
    pageSection = 0;
    showSection();
  });
});

const friendsListData = [
  {
    fito: "https://i.pinimg.com/736x/66/b5/48/66b548a84939fc59d6a29dd04db9c4f1.jpg",
    login: "@oleg92233",
    name: "Олег",
    mined: 10000,
    deposit: 1000,
    advertisement: 100,
    yourIncome: 10000,
    total: 70,
  },
  {
    fito: "https://i.pinimg.com/736x/66/b5/48/66b548a84939fc59d6a29dd04db9c4f1.jpg",
    login: "@oleg92233",
    name: "Олег",
    mined: 10000,
    deposit: 1000,
    advertisement: 100,
    yourIncome: 10000,
    total: 70,
  },
];

function addFriendBlock(friendData) {
  const friendsRenderBlock = `
      <div class="friends-withdrawal_block-data BFS">
        <div class="friends-block-top">
          <img src="${friendData.fito}" alt="" />
          <div>
            <span>Login </span>
            <p>${friendData.login}</p>
          </div>
          <div>
            <span>Имя:</span>
            <p>${friendData.name}</p>
          </div>
        </div>
        <div class="friends-block-bottom">
          <div class="friends-block-bottom_cell">
            <b>Добыто:</b>
            <div class="friends-block-bottom_cell-bottom">
              <span>${friendData.mined}</span>
              <img src="./src/images/DM_gold.svg" alt="" />
            </div>
          </div>
          <div class="friends-block-bottom_cell">
            <b>Депозит:</b>
            <div class="friends-block-bottom_cell-bottom">
              <span>${friendData.deposit}</span>
              <img src="./src/images/DM_gold.svg" alt="" />
            </div>
          </div>
          <div class="friends-block-bottom_cell">
            <b>Реклама:</b>
            <div class="friends-block-bottom_cell-bottom">
              <span>${friendData.advertisement}</span>
              <img src="./src/images/DM_gold.svg" alt="" />
            </div>
          </div>
          <div class="friends-block-bottom_cell">
            <b>Ваш доход:</b>
            <div class="friends-block-bottom_cell-bottom">
              <span>${friendData.yourIncome}</span>
              <img src="./src/images/DM_gold.svg" alt="" />
            </div>
          </div>
          <div class="friends-block-bottom_cell">
            <div>-</div>
            <div class="friends-block-bottom_cell-bottom">
              <span>${friendData.total}</span>
              <img src="./src/images/DM_gold.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    `;

  friendsWithdrawal_Div.innerHTML += friendsRenderBlock;
}

// Вызов функции для каждого друга
friendsListData.forEach((friend) => addFriendBlock(friend));
