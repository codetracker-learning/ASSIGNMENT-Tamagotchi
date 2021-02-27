import printDom from './printDom';
import { getFullness } from '../helpers/data/stomach';
import { getFun } from '../helpers/data/fun';
import { getStrength } from '../helpers/data/fight';
import { getEnergy } from '../helpers/data/energy';

const calcAve = () => (getFullness() + getFun() + getStrength() + getEnergy()) / 4;

const displayProgress = () => {
  const average = calcAve();
  const progressStr = `<div class="progress-bar"
    role="progressbar" style="width: ${average}%" aria-valuenow="${average}" aria-valuemin="0" 
    aria-valuemax="100">Life Score: ${average}</div>
    </div>`;
  printDom('#progress', progressStr);
};

export default displayProgress;
