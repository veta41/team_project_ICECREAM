  const closeButton = document.querySelector('.form__button--close');
  const orderButton = document.querySelector('.form__button--open');
  const openButton = document.querySelector('[data-modal-buy-now-open]');
  const backdrop = document.querySelector('.backdrop-buy-now');
  const modal = document.querySelector('.modal-buy-now');
  const titleAnimation = document.querySelector('.form__title');
  const maxWidth = document.body.clientWidth;
  


openButton.addEventListener('click', () => {
  backdrop.classList.remove('backdrop-buy-now--is-hidden');
  titleAnimation.classList.add('animate__animated', 'animate__bounceInDown');
  document.body.setAttribute('style', `max-width: ${maxWidth}px; overflow: hidden;`);
});

closeButton.addEventListener('click', () => {
  backdrop.classList.add('backdrop-buy-now--is-hidden');
  titleAnimation.classList.remove('animate__animated', 'animate__bounceInDown');
  document.body.removeAttribute('style', `max-width: ${maxWidth}px; overflow: hidden;`);
});

orderButton.addEventListener('click', () => {
  backdrop.classList.add('backdrop-buy-now--is-hidden');
  document.body.removeAttribute('style', `max-width: ${maxWidth}px; overflow: hidden;`);
  location.href=location.href;
});

backdrop.addEventListener('click', function (e) {
  if (!e.target.closest('.modal-buy-now')) {
    backdrop.classList.add('backdrop-buy-now--is-hidden');
    titleAnimation.classList.remove('animate__animated', 'animate__bounceInDown');
    document.body.removeAttribute('style', `max-width: ${maxWidth}px; overflow: hidden;`);
    }
  });