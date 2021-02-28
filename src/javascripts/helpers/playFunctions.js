function superFun() {
  let fun = Number(document.querySelector('#fun').innerHTML);
  fun = Math.min(fun + 50, 100);
  document.querySelector('#fun').innerHTML = `${fun}`;
}

function slightlyFun() {
  let fun = Number(document.querySelector('#fun').innerHTML);
  fun = Math.min(fun + 2, 100);
  document.querySelector('#fun').innerHTML = `${fun}`;
}

export { superFun, slightlyFun };
