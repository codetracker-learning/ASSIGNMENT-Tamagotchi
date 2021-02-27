import '../styles/main.scss';
import eatCard from './components/eatCard';
import playCard from './components/playCard';
import fightCard from './components/fightCard';
import sleepCard from './components/sleepCard';
import buttonEvents from './helpers/buttonEvents';

function init() {
  eatCard();
  playCard();
  fightCard();
  sleepCard();
  buttonEvents();
}

init();
