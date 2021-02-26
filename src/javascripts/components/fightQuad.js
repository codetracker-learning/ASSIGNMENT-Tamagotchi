import printDom from './printDom';
import { getStrength } from '../helpers/data/fight';

const displayFight = () => {
  const fightStr = `<div class="fight"> 
  <h2>Fight</h2>
  <div class="q-status" id="strength">${getStrength()}</div>
  <div class="buttons">
    <button type="button" class="btn btn-primary" id="flee-btn">Flee</button>
    <button type="button" class="btn btn-danger" id="fight-btn">Fight!</button>
  </div>
  </div>`;
  printDom('#fight', fightStr);
};

export default displayFight;
