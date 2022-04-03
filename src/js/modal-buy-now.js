(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-buy-now-open]'),
    closeModalBtn: document.querySelector('[data-modal-buy-now-close]'),
    modal: document.querySelector('[data-modal-buy-now]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal-buy-now-open');
    refs.modal.classList.toggle('backdrop-buy-now--is-hidden');
  }
})();
