// allQuads.js
import displayProgress from './progressBar';
import displayEat from './eatQuad';
import displayPlay from './playQuad';
import displayFight from './fightQuad';
import displaySleep from './sleepQuad';
import drawPet from './pet';
import isKaput from '../helpers/calculators/kaput';
import {
  getPetName, getPetUrl, getKaputUrl,
} from '../helpers/data/petData';

const displayQuads = () => {
  const petName = getPetName();
  let petUrl = getPetUrl();
  displayProgress();
  displayEat();
  displayPlay();
  displayFight();
  displaySleep();
  if (isKaput()) {
    petUrl = getKaputUrl();
  }
  drawPet(petName, petUrl);
};

export default displayQuads;
