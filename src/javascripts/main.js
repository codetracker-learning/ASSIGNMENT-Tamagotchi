import '../styles/main.scss';

let full = 100;

function wholeFoods() {
  full = Math.min(full + 10, 100);
  document.querySelector('#full').innerHTML = `${full}`;
}

function junkFood() {
  full = Math.min(full + 3, 100);
  document.querySelector('#full').innerHTML = `${full}`;
}

function buttonEvents() {
  document.querySelector('#wholeFoods').addEventListener('click', wholeFoods);
  document.querySelector('#junkFood').addEventListener('click', junkFood);
}

function init() {
  buttonEvents();
}

init();
