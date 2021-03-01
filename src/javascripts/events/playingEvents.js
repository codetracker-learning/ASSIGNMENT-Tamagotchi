// playingEvents.js
import { bigFun, littleFun } from '../helpers/calculators/calculator';
import displayQuads from '../components/allQuads';
import isKaput from '../helpers/calculators/kaput';

const listenPlaying = (e) => {
  console.warn(e.target.id);
  let refresh = false;
  if (!isKaput()) {
    switch (e.target.id) {
      case 'slide':
        bigFun();
        refresh = true;
        break;
      case 'hoola':
        littleFun();
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

export default listenPlaying;
