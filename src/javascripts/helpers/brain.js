import appBuilder from '../components/appBuilder';
import eatCard from '../components/eatCard';
import playCard from '../components/playCard';
import fightCard from '../components/fightCard';
import sleepCard from '../components/sleepCard';
import buttonEvents from './buttonEvents';

function brain() {
  appBuilder();
  eatCard();
  playCard();
  fightCard();
  sleepCard();
  buttonEvents();
}

export default brain;
