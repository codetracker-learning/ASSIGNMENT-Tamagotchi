// eatingEvents.js
import { feedHealthy, feedJunk } from '../helpers/data/stomach';
import displayEat from '../components/eatQuad';

const listenEating = (e) => {
  console.warn(e.target.id);
  let refresh = false;
  switch (e.target.id) {
    case 'healthy':
      feedHealthy();
      refresh = true;
      break;
    case 'junk':
      feedJunk();
      refresh = true;
      break;
    default:
      break;
  }
  if (refresh) {
    displayEat();
  }
};

export default listenEating;
