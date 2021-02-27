import { wholeFoods, junkFood } from './eatFunctions';

function buttonEvents() {
  document.querySelector('#wholeFoods').addEventListener('click', wholeFoods);
  document.querySelector('#junkFood').addEventListener('click', junkFood);
}

export default buttonEvents;
