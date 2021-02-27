function runAway() {
  let strength = Number(document.querySelector('#strength').innerHTML);
  strength = Math.min(strength + 1, 100);
  document.querySelector('#strength').innerHTML = `${strength}`;
}

function attack() {
  let strength = Number(document.querySelector('#strength').innerHTML);
  strength = Math.max(strength - 10, 0);
  document.querySelector('#strength').innerHTML = `${strength}`;
}
export { runAway, attack };
