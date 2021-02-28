import printToDom from '../helpers/printToDom';

function playCard() {
  const domString = `
  <div class="card text-center">
            <div class="card-header">
              Play
            </div>
            <div class="card-body">
              <h5 id="fun" class="card-title">50</h5>
              <button type="button" id="superFun" href="#" class="btn btn-primary">Super Fun Game!</button>
              <button type="button" id="slightlyFun" href="#" class="btn btn-primary">Slightly Fun Game</button>
            </div>
          </div>`;
  printToDom('#play', domString);
}

export default playCard;
