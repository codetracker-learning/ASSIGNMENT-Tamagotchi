// allQuads.js
import displayProgress from './progressBar';
import displayEat from './eatQuad';
import displayPlay from './playQuad';
import displayFight from './fightQuad';
import displaySleep from './sleepQuad';

const displayQuads = () => {
  displayProgress();
  displayEat();
  displayPlay();
  displayFight();
  displaySleep();
};

export default displayQuads;
