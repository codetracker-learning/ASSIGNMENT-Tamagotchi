import PrintEatQuadrant from './eatQuadrant';
import PrinPlayQuadrant from './playQuadrant';
import PrintFightQuadrant from './fightQuadrant';
import PrintSleepQuadrant from './sleepQuadrant';
import domEvents from './DOMEvents';

const InitializeQuadrants = () => {
  PrintEatQuadrant();
  PrinPlayQuadrant();
  PrintFightQuadrant();
  PrintSleepQuadrant();
  domEvents();
};

export default InitializeQuadrants;
