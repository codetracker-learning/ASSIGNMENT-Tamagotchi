// sleepingEvents.js
import { nap, slumber } from '../helpers/calculators/calculator';
import displayQuads from '../components/allQuads';
import isKaput from '../helpers/calculators/kaput';

const listenSleeping = (e) => {
  console.warn(e.target.id);
  let refresh = false;
  if (!isKaput()) {
    switch (e.target.id) {
      case 'sleep-btn':
        slumber();
        refresh = true;
        break;
      case 'nap-btn':
        nap();
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

export default listenSleeping;
