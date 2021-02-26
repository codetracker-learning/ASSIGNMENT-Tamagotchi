// sleepingEvents.js
import { nap, slumber } from '../helpers/data/energy';
import displaySleep from '../components/sleepQuad';

const listenSleeping = (e) => {
  console.warn(e.target.id);
  let refresh = false;
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
  if (refresh) {
    displaySleep();
  }
};

export default listenSleeping;
