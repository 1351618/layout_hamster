const participant = document.getElementById("participant");
const advertiser = document.getElementById("advertiser");
const contentParticipantSecond = document.querySelector(
  ".content_participant_second"
);

/** блоки для скрытия и отображения */
const pageTasksHidingBlocks = {
  useChStatParticipant: document.querySelector(".statistics-participant"),
  useChStatAdvertiser: document.querySelector(".statistics-advertiser"),
  useChContParticipant: document.querySelector(".user-content_participant"),
  useChContAdvertiser: document.querySelector(".user-content_advertiser"),
};

// данные для первой вкладни
const contentParticipantSecondTableData = [
  {
    id: 13138,
    name: "Название канала длинное очень...",
    task: "Подписка",

    link: "#", // Вы можете заменить на реальную ссылку, если она есть
    status: "Активен",
  },
  {
    id: 13139,
    name: "Название канала",
    task: "Подписка",

    link: "#", // Вы можете заменить на реальную ссылку, если она есть
    status: "0/300",
  },
  {
    id: 13140,
    name: "Название канала",
    task: "Подписка",

    link: "#", // Вы можете заменить на реальную ссылку, если она есть
    status: "0/300",
  },
  {
    id: 13138,
    name: "Название канала длинное очень...",
    task: "Подписка",

    link: "#", // Вы можете заменить на реальную ссылку, если она есть
    status: "Активен",
  },
  {
    id: 13139,
    name: "Название канала",
    task: "Подписка",

    link: "#", // Вы можете заменить на реальную ссылку, если она есть
    status: "0/300",
  },
  {
    id: 13140,
    name: "Название канала",
    task: "Подписка",

    link: "#", // Вы можете заменить на реальную ссылку, если она есть
    status: "0/300",
  },
  {
    id: 13138,
    name: "Название канала длинное очень...",
    task: "Подписка",

    link: "#", // Вы можете заменить на реальную ссылку, если она есть
    status: "Активен",
  },
  {
    id: 13139,
    name: "Название канала",
    task: "Подписка",

    link: "#", // Вы можете заменить на реальную ссылку, если она есть
    status: "0/300",
  },
  {
    id: 13140,
    name: "Название канала",
    task: "Подписка",

    link: "#", // Вы можете заменить на реальную ссылку, если она есть
    status: "0/300",
  },
  {
    id: 13138,
    name: "Название канала длинное очень...",
    task: "Подписка",

    link: "#", // Вы можете заменить на реальную ссылку, если она есть
    status: "Активен",
  },
  {
    id: 13139,
    name: "Название канала",
    task: "Подписка",

    link: "#", // Вы можете заменить на реальную ссылку, если она есть
    status: "0/300",
  },
  {
    id: 13140,
    name: "Название канала",
    task: "Подписка",

    link: "#", // Вы можете заменить на реальную ссылку, если она есть
    status: "0/300",
  },
  {
    id: 13138,
    name: "Название канала длинное очень...",
    task: "Подписка",

    link: "#", // Вы можете заменить на реальную ссылку, если она есть
    status: "Активен",
  },
  {
    id: 13139,
    name: "Название канала",
    task: "Подписка",

    link: "#", // Вы можете заменить на реальную ссылку, если она есть
    status: "0/300",
  },
  {
    id: 13140,
    name: "Название канала",
    task: "Подписка",

    link: "#", // Вы можете заменить на реальную ссылку, если она есть
    status: "0/300",
  },
];

// Функция для добавления данных в таблицу
function populateTable() {
  //   const tableBody = document.getElementById("cps_tableBody"); // Получаем элемент tbody таблицы

  // Перебираем все данные
  contentParticipantSecondTableData.forEach((row) => {
    // Создаем строку таблицы
    // const tr = document.createElement("tr");
    const div = document.createElement("div");
    div.classList.add("cps-block", "BFS", "btnF");

    // Добавляем содержимое
    div.innerHTML = `
        <div class="cps-block_cont">
            <span>id</span>
            <span>Название</span>
            <p>${row.id}</p>
            <p>${row.name}</p>
            <span>Задание</span>
            <span>Статус</span>
            <p>Подписка</p>
    
                <p>${
                  row.status === "Активен"
                    ? '<img src="./src/images/green check mark.png" alt="">'
                    : row.status
                }</p>
        </div>
        <a href="${row.link}">Перейти</a>
    `;

    contentParticipantSecond.appendChild(div);
  });
}

// Вызываем функцию для заполнения таблицы
populateTable();

/** participant | advertiser */
let selectedUser = "participant";

/** функция скрытия блоков */
function f_pt_HidingBlocks() {
  Object.values(pageTasksHidingBlocks).forEach((hidBlock) => {
    hidBlock.classList.add("hiden");
  });
}

/** функция отображения  блоков */
function f_pt_ShowBlocks() {
  f_pt_HidingBlocks();
  if (selectedUser === "participant") {
    pageTasksHidingBlocks.useChStatParticipant.classList.remove("hiden");
    pageTasksHidingBlocks.useChContParticipant.classList.remove("hiden");
    participant.classList.add("active");
    advertiser.classList.remove("active");
  }
  if (selectedUser === "advertiser") {
    pageTasksHidingBlocks.useChStatAdvertiser.classList.remove("hiden");
    pageTasksHidingBlocks.useChContAdvertiser.classList.remove("hiden");
    participant.classList.remove("active");
    advertiser.classList.add("active");
  }
}

// обработка кнопок
participant.addEventListener("click", () => {
  selectedUser = "participant";
  f_pt_ShowBlocks();
});
advertiser.addEventListener("click", () => {
  selectedUser = "advertiser";
  f_pt_ShowBlocks();
});

// отображаем начальные блоки
f_pt_ShowBlocks();
