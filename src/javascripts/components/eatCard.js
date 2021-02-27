function eatCard() {
  document.querySelector('#eat').innerHTML = `
  <div class="card text-center">
  <div class="card-header">
    Eat
  </div>
  <div class="card-body">
    <h5 id="full" class="card-title">100</h5>
    <button type="button" id="wholeFoods" href="#" class="btn btn-primary">Whole Foods</button>
    <button type="button" id="junkFood" href="#" class="btn btn-primary">Junk Food</button>
  </div>
</div>`;
}

export default eatCard;
