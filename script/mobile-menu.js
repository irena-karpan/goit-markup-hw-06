(() => {
  const refs = {
    // Додати атрибут data-mobile-menu-open на кнопку відкриття
    openMenuBtn: document.querySelector("[data-mobile-menu-open]"),
    // Додати атрибут data-mobile-menu-close на кнопку закриття
    closeMenuBtn: document.querySelector("[data-mobile-menu-close]"),
    // Додати атрибут data-mobile-menu на бекдроп мобільного меню
    menu: document.querySelector("[data-mobile-menu]"),
  };

  refs.openMenuBtn.addEventListener("click", toggleModal);
  refs.closeMenuBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
    refs.menu.classList.toggle("is-open");
  }
})();