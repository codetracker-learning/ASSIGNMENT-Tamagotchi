// kaput.js

import { getEnergy } from '../data/energy';
import { getFullness } from '../data/stomach';
import { getStrength } from '../data/fight';

const isKaput = () => {
  let kaput = false;
  if (!getEnergy() || !getStrength() || !getFullness()) {
    kaput = true;
  }
  return kaput;
};

export default isKaput;
