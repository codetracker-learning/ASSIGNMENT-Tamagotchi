function wholeFoods() {
  let full = Number(document.querySelector('#full').innerHTML);
  full = Math.min(full + 10, 100);
  document.querySelector('#full').innerHTML = `${full}`;
}

function junkFood() {
  let full = Number(document.querySelector('#full').innerHTML);
  full = Math.max(full - 3, 0);
  document.querySelector('#full').innerHTML = `${full}`;
}

export { wholeFoods, junkFood };
