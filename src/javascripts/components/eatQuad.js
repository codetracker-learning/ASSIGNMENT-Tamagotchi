import printDom from './printDom';
import { getFullness } from '../helpers/data/stomach';

const displayEat = () => {
  const eatStr = `<div class="eat"> 
  <h2>Eat!</h2>
  <div class="q-status" id="fullness">${Math.round(getFullness())}</div>
  <div class="buttons" id="eatButtons">
    <button type="button" class="btn btn-primary" id="healthy">Healthy Meal</button>
    <button type="button" class="btn btn-danger" id="junk">Junk Food</button>
  </div>
  </div>`;
  printDom('#eat', eatStr);
};

export default displayEat;
