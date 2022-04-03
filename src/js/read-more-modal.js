const testButton = document.querySelector('.btn-about');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.readmore__modal');

testButton.addEventListener('click', () => overlay.classList.toggle('overlay--off'));
overlay.addEventListener('click', () => overlay.classList.toggle('overlay--off'));
