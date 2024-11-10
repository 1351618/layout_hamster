const settingsSectionAll = document.querySelectorAll(".settings-section");
const settingsBackMainBtnAll = document.querySelectorAll(
  ".settings_back-main-btn"
);
const settingsMainLanguage_Btn = document.getElementById(
  "settings_main__language"
);
const settingsMainTheme_Btn = document.getElementById("settings_main__theme");
const settingsMainWalletAddress_Btn = document.getElementById(
  "settings_main__wallet-address"
);
const settingsMainContacts_Btn = document.getElementById(
  "settings_main__contacts"
);

/**
 * 0 - main,
 * 1 - Language,
 * 2 - theme
 */
let activeSectionIndex = 0;

function toggleSections() {
  settingsSectionAll.forEach((section, index) => {
    section.classList.toggle("hiden", index !== activeSectionIndex);
  });
}

// Обработчик перехода на другие секции
function setupSectionNavigation(button, sectionIndex) {
  button.addEventListener("click", () => {
    activeSectionIndex = sectionIndex;
    toggleSections();
  });
}

// Настройка кнопок для перехода на секции
setupSectionNavigation(settingsMainLanguage_Btn, 1);
setupSectionNavigation(settingsMainTheme_Btn, 2);
setupSectionNavigation(settingsMainWalletAddress_Btn, 3);
setupSectionNavigation(settingsMainContacts_Btn, 4);

// Обработчик для кнопок возврата на главную
settingsBackMainBtnAll.forEach((btn) => {
  btn.addEventListener("click", () => {
    activeSectionIndex = 0; // Главная секция
    toggleSections();
  });
});

// Изначальная настройка видимости секций
toggleSections();
