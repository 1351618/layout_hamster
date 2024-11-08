document.addEventListener("DOMContentLoaded", () => {
  // Добавляем класс 'active' первой кнопке при загрузке страницы
  const firstButton = document.querySelector(".menu-button");
  firstButton.classList.add("active");

  // Выводим в консоль информацию о первой кнопке
  console.log("Нажата кнопка:", firstButton.querySelector("p").textContent);

  // Добавляем обработчики событий для остальных кнопок
  document.querySelectorAll(".menu-button").forEach((button) => {
    button.addEventListener("click", () => {
      // Удаляем класс 'active' у всех кнопок
      document
        .querySelectorAll(".menu-button")
        .forEach((btn) => btn.classList.remove("active"));

      // Добавляем 'active' к нажатой кнопке
      button.classList.add("active");

      // Выводим в консоль информацию о нажатой кнопке
      console.log("Нажата кнопка:", button.querySelector("p").textContent);
    });
  });
});
