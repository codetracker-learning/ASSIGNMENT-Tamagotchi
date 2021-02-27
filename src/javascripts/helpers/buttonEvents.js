import { wholeFoods, junkFood } from './eatFunctions';
import { superFun, slightlyFun } from './playFunctions';
import { runAway, attack } from './fightFunctions';
import { nap, slumber } from './sleepFunctions';

function buttonEvents() {
  document.querySelector('#wholeFoods').addEventListener('click', wholeFoods);
  document.querySelector('#junkFood').addEventListener('click', junkFood);
  document.querySelector('#superFun').addEventListener('click', superFun);
  document.querySelector('#slightlyFun').addEventListener('click', slightlyFun);
  document.querySelector('#runAway').addEventListener('click', runAway);
  document.querySelector('#attack').addEventListener('click', attack);
  document.querySelector('#nap').addEventListener('click', nap);
  document.querySelector('#slumber').addEventListener('click', slumber);
}

export default buttonEvents;
