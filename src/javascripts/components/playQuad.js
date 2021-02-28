import printDom from './printDom';
import { getFun } from '../helpers/data/fun';

const displayPlay = () => {
  const playStr = `<div class="play"> 
  <h2>Play</h2>
  <div class="q-status" id="fun">${Math.round(getFun())}</div>
  <div class="buttons">
    <button type="button" class="btn btn-primary" id="slide">Water Slide!</button>
    <button type="button" class="btn btn-danger" id="hoola">Hoola Hoop</button>
  </div>
  </div>`;
  printDom('#play', playStr);
};

export default displayPlay;
