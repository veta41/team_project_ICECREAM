(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-map-open]'),
    closeModalBtn: document.querySelector('[data-modal-map-close]'),
    modal: document.querySelector('[data-modal-map]'),
  };

  const maxWidth = document.body.clientWidth;

  // refs.openModalBtn.addEventListener('click', toggleModal);
  // refs.closeModalBtn.addEventListener('click', toggleModal);

  refs.openModalBtn.addEventListener('click', addModal);
  refs.closeModalBtn.addEventListener('click', removeModal);

  function addModal() {
    // document.body.classList.add('modal-map-open');
    refs.modal.classList.remove('is-hidden');
    // console.log('ddddddddddddddddddd');
    document.body.setAttribute('style', `max-width: ${maxWidth}px; overflow: hidden;`);
  }

  function removeModal() {
    document.body.classList.remove('modal-map-open');
    refs.modal.classList.add('is-hidden');
    document.body.removeAttribute('style');
  }

  // function toggleModal() {
  //   document.body.classList.toggle('modal-map-open');
  //   refs.modal.classList.toggle('is-hidden');
  // }
})();
