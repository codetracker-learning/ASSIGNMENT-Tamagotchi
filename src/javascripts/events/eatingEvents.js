// eatingEvents.js
import { eatHealthy, eatJunk } from '../helpers/calculators/calculator';
import displayQuads from '../components/allQuads';
import isKaput from '../helpers/calculators/kaput';

const listenEating = (e) => {
  console.warn(e.target.id);
  let refresh = false;
  if (!isKaput()) {
    switch (e.target.id) {
      case 'healthy':
        eatHealthy();
        refresh = true;
        break;
      case 'junk':
        eatJunk();
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

export default listenEating;
