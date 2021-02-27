function nap() {
  let energy = Number(document.querySelector('#energy').innerHTML);
  energy = Math.min(energy + 50, 100);
  document.querySelector('#energy').innerHTML = `${energy}`;
}

function slumber() {
  let energy = Number(document.querySelector('#energy').innerHTML);
  energy = Math.min(energy + 60, 100);
  document.querySelector('#energy').innerHTML = `${energy}`;
}

export { nap, slumber };
