// playingEvents.js
import { superFun, regularFun } from '../helpers/data/fun';
import displayFun from '../components/playQuad';

const listenPlaying = (e) => {
  console.warn(e.target.id);
  let refresh = false;
  switch (e.target.id) {
    case 'slide':
      superFun();
      refresh = true;
      break;
    case 'hoola':
      regularFun();
      refresh = true;
      break;
    default:
      break;
  }
  if (refresh) {
    displayFun();
  }
};

export default listenPlaying;
