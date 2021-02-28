import printToDom from '../helpers/printToDom';

function fightCard() {
  const domString = `
  <div class="card text-center">
  <div class="card-header">
    Fight
  </div>
  <div class="card-body">
    <h5 id="strength" class="card-title">100</h5>
    <button type="button" id="runAway" href="#" class="btn btn-primary">Run Away</button>
    <button type="button" id="attack" href="#" class="btn btn-primary">Attack!</button>
  </div>
</div>`;
  printToDom('#fight', domString);
}

export default fightCard;
