import printDom from './printDom';
import calcAve from '../helpers/calculators/average';

const displayProgress = () => {
  const average = calcAve().toFixed(2);
  const progressStr = `<div class="progress-container">
    <div class="progress-bar" id="pet-progress"
      role="progressbar" style="width: ${average}%" aria-valuenow="${average}" aria-valuemin="0" 
      aria-valuemax="100"></div><div class="life-score">Life Score: ${average}</div>
  </div>`;
  printDom('#progress', progressStr);
};

export default displayProgress;
