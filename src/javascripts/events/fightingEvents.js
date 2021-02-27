// fightingEvents.js
import { flee, fight } from '../helpers/data/fight';
import displayQuads from '../components/allQuads';
import { addEnergy } from '../helpers/data/energy';
import { addFun } from '../helpers/data/fun';

const listenFighting = (e) => {
  console.warn(e.target.id);
  let refresh = false;
  switch (e.target.id) {
    case 'fight-btn':
      fight();
      addEnergy(-10);
      addFun(-10);
      refresh = true;
      break;
    case 'flee-btn':
      flee();
      addEnergy(-15);
      addFun(-15);
      refresh = true;
      break;
    default:
      break;
  }
  if (refresh) {
    displayQuads();
  }
};

export default listenFighting;
