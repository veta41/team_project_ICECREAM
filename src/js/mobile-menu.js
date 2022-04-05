(() => {
  const refs = {
    openMenuBtn: document.querySelector('.burger-open-btn'),
    closeMenuBtn: document.querySelector('.button__close'),
    btn__header: document.querySelector('.btn__header'),
    menu: document.querySelector('.mobile__menu'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.openMenuBtn.classList.toggle('visually-hidden');
    refs.btn__header.classList.toggle('visually-hidden');
    refs.menu.classList.toggle('is-open');
  }
})();
