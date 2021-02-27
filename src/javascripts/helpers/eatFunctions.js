let full = 40;

function wholeFoods() {
  full = Math.min(full + 10, 100);
  document.querySelector('#full').innerHTML = `${full}`;
}

function junkFood() {
  full = Math.min(full + 3, 100);
  document.querySelector('#full').innerHTML = `${full}`;
}

export { wholeFoods, junkFood };
