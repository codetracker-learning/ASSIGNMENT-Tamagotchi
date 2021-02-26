import '../styles/main.scss';
import displayEat from './components/eatQuad';
import displayPlay from './components/playQuad';
import displayFight from './components/fightQuad';
import displaySleep from './components/sleepQuad';
import buttonEvents from './events/buttonEvents';

const printPageBase = () => {
  document.querySelector('#progress').innerHTML = '<h2>Progress</h2>';
  displayEat();
  displayPlay();
  displayFight();
  displaySleep();
  document.querySelector('#pet').innerHTML = '<h2>Pet</h2>';
  buttonEvents();
};

const init = () => {
  printPageBase();
};

init();
