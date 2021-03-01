import printDom from './printDom';
import { getEnergy } from '../helpers/data/energy';

const displaySleep = () => {
  const sleepStr = `<div class="sleep"> 
  <h2>Sleep</h2>
  <div class="q-status" id="sleep">${Math.round(getEnergy())}</div>
  <div class="buttons">
    <button type="button" class="btn btn-primary" id="sleep-btn">Sleep</button>
    <button type="button" class="btn btn-info" id="nap-btn">Nap</button>
  </div>
  </div>`;
  printDom('#sleep', sleepStr);
};

export default displaySleep;
