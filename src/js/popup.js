const popupDiv = document.querySelector(".popup");
const popupContentDiv = document.querySelector(".popup_content");
const addInformBtn = document.getElementById("addInformBtn");

/**
 * Индекс текущего элемента в массиве
 */
let currentIndex = 0;

// Данные для отображения, в последнем не должно быть кнопри для отрисовки следующего
const popapData = [
  {
    popapCont:
      "<hr/><img src='./src/images/notification.svg' alt='' /><p>Ваш хомяк работает ровно 24 часа, после чего он уснёт. Чтобы разбудить его и включить в работу на 24 часа, надо нажать на него. <br/><br/> Вы можете нажимать по хомяку в любое время.Счётчик обновится. <!-- <b>DOP TEXT</b> --> </p>",
    nextBtn:
      "<button id='popupNotActive'><img src='./src//images/check_mark.svg' alt='' /><span>Понятно</span></button>",
  },
  {
    popapCont:
      "<hr/><img src='./src/images/DTM_T.svg' alt='' /><h2>Вы хотите продать DTM <br/> по официальному курсу <br/> 0.0002 USDT за 1 DTM.</h2> <br/><br/><p>Если вы дождётесь запуска биржи, то сможете продать дороже</p><br/><p>Вы получите: <b>2 USDT</b> на свой баланс</p>",
    nextBtn:
      "<button id='popupNotActive'><img src='./src//images/DM_gold.svg' alt='' /><span>Продать DTM</span></button>",
  },
  {
    popapCont:
      "<hr/><img src='./src/images/DTM_T.svg' alt='' /><h2>Ваши 10000 DTM проданы.</h2> <br/><p>Сумма в размере 2 USDT <br/> зачислена на ваш баланс</p><br/><br/><br/><br/>",
    nextBtn:
      "<button id='popupNotActive'><img src='./src//images/check_mark.svg' alt='' /><span>Понятно</span></button>",
  },
];

/**
 * Открытие попапа с добавлением класса "active"
 */
function activePopupDiv() {
  popupDiv.classList.add("active");
}

/**
 * Закрытие попапа с удалением класса "active"
 */
function notActivePopupDiv() {
  popupDiv.classList.remove("active");
  currentIndex = 0; // Сброс индекса для следующего показа
}

/**
 * Функция для отрисовки текущего элемента из массива `data`
 */
function renderPopupContent() {
  // Очистим старое содержимое
  popupContentDiv.innerHTML = "";

  // Проверка на наличие следующего элемента
  if (currentIndex < popapData.length) {
    // Добавим содержимое текущего элемента из массива
    const currentItem = popapData[currentIndex];
    popupContentDiv.innerHTML = `${currentItem.popapCont}`;

    // Проверяем наличие кнопки `nextBtn` в текущем элементе массива
    const buttonHTML = currentItem.nextBtn
      ? currentItem.nextBtn
      : `<button id="popupNotActive"><img src="./src/images/check_mark.svg" alt="" /><span>Понятно</span></button>`;
    popupContentDiv.innerHTML += buttonHTML;
    activePopupDiv();

    // Привязка обработчика к кнопке
    const popupNotActiveBtn = document.getElementById("popupNotActive");
    popupNotActiveBtn.addEventListener("click", () => {
      currentIndex++; // Увеличиваем индекс для следующего элемента
      renderPopupContent(); // Рекурсивно вызываем отрисовку следующего элемента
    });
  } else {
    notActivePopupDiv(); // Если элементов больше нет, закрываем попап
  }
}

/**
 * Обработчик кнопки дополнительной информации
 */
addInformBtn.addEventListener("click", () => {
  renderPopupContent(); // Запускаем отрисовку первого элемента
});
