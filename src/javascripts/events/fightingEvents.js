// fightingEvents.js
import displayQuads from '../components/allQuads';
import { violence, flee } from '../helpers/calculators/calculator';
import isKaput from '../helpers/calculators/kaput';

const listenFighting = (e) => {
  console.warn(e.target.id);
  let refresh = false;
  if (!isKaput()) {
    switch (e.target.id) {
      case 'fight-btn':
        violence();
        refresh = true;
        break;
      case 'flee-btn':
        flee();
        refresh = true;
        break;
      default:
        break;
    }
  }
  if (refresh) {
    displayQuads();
  }
};

export default listenFighting;
