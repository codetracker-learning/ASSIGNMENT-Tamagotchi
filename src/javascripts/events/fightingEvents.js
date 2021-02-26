// fightingEvents.js
import { flee, fight } from '../helpers/data/fight';
import displayFight from '../components/fightQuad';

const listenFighting = (e) => {
  console.warn(e.target.id);
  let refresh = false;
  switch (e.target.id) {
    case 'fight-btn':
      fight();
      refresh = true;
      break;
    case 'flee-btn':
      flee();
      refresh = true;
      break;
    default:
      break;
  }
  if (refresh) {
    displayFight();
  }
};

export default listenFighting;
