const popupSection = document.querySelector(".section-popup");
const popupDiv = document.querySelector(".popup");
const popupContentDiv = document.querySelector(".popup_content");

const addInformBtn = document.getElementById("addInformBtn");
const centerHamsterGotBtn = document.getElementById("centerHamsterGot");
const topExtractionStoryBtn = document.getElementById("topExtractionStoryBtn");
const popupNotActiveBtn = document.querySelectorAll(".popupNotActive");
const popupNextBtn = document.querySelectorAll(".popupNext");
const hiddenDiv = document.querySelectorAll(".hiddenDiv");

// <!-- данные для попаов -->
const addInformBtnData = { namePopap: "addInform" };
const centerHamsterGotBtnData = { namePopap: "centerHamsterGot" };
const topExtractionStoryBtnData = {
  namePopap: "topExtractionStory",
  boosts: [
    { date: "31.07.2024", dtm: "2500 DTM", usdt: "0.5 USDT" },
    { date: "31.07.2024", dtm: "2250 DTM", usdt: "0.45 USDT" },
    { date: "31.07.2024", dtm: "1500 DTM", usdt: "0.25 USDT" },
    { date: "31.07.2024", dtm: "500 DTM", usdt: "0.15 USDT" },
    { date: "31.07.2024", dtm: "1500 DTM", usdt: "0.35 USDT" },
  ],
  accruals: [
    { date: "31.07.2024", hired: "100 USDT", timeLeft: "25 д. 23:54:13" },
    { date: "31.07.2024", hired: "50 USDT", timeLeft: "21 д. 23:54:13" },
    { date: "31.07.2024", hired: "90 USDT", timeLeft: "24 д. 23:54:13" },
    { date: "31.07.2024", hired: "20 USDT", timeLeft: "12 д. 23:54:13" },
    { date: "31.07.2024", hired: "50 USDT", timeLeft: "19 д. 23:54:13" },
  ],
};

/**
 * Открытие попапа с добавлением класса "active"
 */
function activePopupDiv() {
  popupSection.classList.add("active");
  popupDiv.classList.add("active");
}

/**
 * Закрытие попапа с удалением класса "active"
 */
function notActivePopupDiv() {
  // Снимаем активные классы для попапа
  popupSection.classList.remove("active");
  popupDiv.classList.remove("active");
  // Возвращаем класс not-active всем попапам, которые были активными
  const popupDivs = popupContentDiv.querySelectorAll(".popup_content-div");
  popupDivs.forEach((div) => {
    div.classList.add("not-active");
  });
  hiddenDiv.forEach((div) => {
    div.classList.add("hiden");
  });
}

/**
 * Функция для отрисовки текущего элемента из массива `content` внутри `popapData`
 */

function renderPopupContent(popapData) {
  // Проверка на наличие элемента с классом, который передан в popapData.namePopap
  const targetDiv = popupContentDiv.querySelector(`.${popapData.namePopap}`);

  // Если элемент не найден, закрываем попап
  if (!targetDiv) {
    console.error(`Элемент с классом .${popapData.namePopap} не найден.`);
    notActivePopupDiv();
    return;
  }

  // Проверка на наличие popapData
  if (!popapData) {
    notActivePopupDiv();
    return;
  }

  // Если элемент найден, продолжаем отрисовку контента
  targetDiv.classList.remove("not-active");

  // <!-- addInform start -->
  if (popapData.namePopap === "addInform") {
    activePopupDiv();
  }

  // <!--  centerHamsterGot start -->
  if (popapData.namePopap === "centerHamsterGot") {
    activePopupDiv();
    const contentBlocks = targetDiv.querySelectorAll(
      ".centerHamsterGot_content"
    );
    let currentIndex = 0;

    function centerHamsterGotInput() {
      const inputElement = document.querySelector("#amount");
      const inputValue = inputElement.value;
      document.getElementById("inputResult").textContent = inputValue;
    }

    // Функция для отображения только одного блока по текущему индексу
    function showContentBlock(index) {
      contentBlocks.forEach((block, idx) => {
        block.classList.toggle("hiden", idx !== index);
      });
    }
    showContentBlock(currentIndex);
    // Находим кнопку "Продать DTM" и добавляем обработчик клика
    const nextButton = targetDiv.querySelector(".popupNext");
    nextButton.addEventListener("click", () => {
      if (currentIndex < contentBlocks.length - 1) {
        currentIndex++;
        centerHamsterGotInput();
        showContentBlock(currentIndex);
      }
    });
  }

  // <!--  topExtractionStory start -->
  if (popapData.namePopap === "topExtractionStory") {
    activePopupDiv();

    const tableBoosts = document.getElementById("StoryContentAccruals");

    // Удаляем все строки, кроме заголовка (первой строки)
    tableBoosts
      .querySelectorAll("tr:not(:first-child)")
      .forEach((row) => row.remove());

    // Добавляем новые строки из данных
    popapData.boosts.forEach((boost) => {
      const newRow = document.createElement("tr");
      newRow.innerHTML = `
        <td>${boost.date}</td>
        <td>${boost.dtm}</td>
        <td>${boost.usdt}</td>
      `;
      // Добавляем новую строку к таблице
      tableBoosts.appendChild(newRow);
    });

    const tableAccruals = document.getElementById("StoryContentBoosts");

    // Удаляем все строки, кроме заголовка (первой строки)
    tableAccruals
      .querySelectorAll("tr:not(:first-child)")
      .forEach((row) => row.remove());

    // Добавляем новые строки из данных
    popapData.accruals.forEach((boost) => {
      const newRow = document.createElement("tr");
      newRow.innerHTML = `
        <td>${boost.date}</td>
        <td>${boost.hired}</td>
        <td>${boost.timeLeft}</td>
      `;
      // Добавляем новую строку в таблицу
      tableAccruals.appendChild(newRow);
    });

    // Переменная для отслеживания текущего индекса
    let currentIndex = 0;

    const topExtractionStoryTabsBtn = targetDiv
      .querySelector(".topExtractionStory_tabs")
      .querySelectorAll("button");

    const contentBlocks = targetDiv.querySelectorAll(
      ".topExtractionStory_content"
    );
    topExtractionStoryTabsBtn[0].classList.add("active");

    // Функция для обновления видимости блоков в зависимости от currentIndex
    function updateContentVisibility() {
      contentBlocks.forEach((block, idx) => {
        block.classList.toggle("hiden", idx !== currentIndex); // Скрываем все, кроме текущего
      });
    }

    // Инициализация отображения контента
    updateContentVisibility();

    // Обработчик клика по кнопкам
    topExtractionStoryTabsBtn.forEach((button, index) => {
      button.addEventListener("click", () => {
        currentIndex = index; // Присваиваем индекс нажатой кнопки

        // Убираем класс 'active' у всех кнопок и добавляем нажатой
        topExtractionStoryTabsBtn.forEach((btn) =>
          btn.classList.remove("active")
        );
        button.classList.add("active");

        // Обновляем видимость блоков
        updateContentVisibility();
      });
    });
  }
}

// Обработчик кнопкок
addInformBtn.addEventListener("click", () => {
  renderPopupContent(addInformBtnData);
});

centerHamsterGotBtn.addEventListener("click", () => {
  renderPopupContent(centerHamsterGotBtnData);
});

topExtractionStoryBtn.addEventListener("click", () => {
  renderPopupContent(topExtractionStoryBtnData);
});

popupNotActiveBtn.forEach((button) => {
  button.addEventListener("click", () => {
    notActivePopupDiv(); // Ваш код для закрытия попапа
  });
});

popupSection.addEventListener("click", (event) => {
  if (event.target === popupSection) {
    notActivePopupDiv();
  }
});

popupDiv.addEventListener("click", (event) => {
  event.stopPropagation();
});
