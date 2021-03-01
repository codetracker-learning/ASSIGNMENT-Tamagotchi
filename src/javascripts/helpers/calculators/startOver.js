// startOver.js

import { setEnergy } from '../data/energy';
import { setStrength } from '../data/fight';
import { setFun } from '../data/fun';
import { setFullness } from '../data/stomach';

const startOver = () => {
  setEnergy(50);
  setStrength(100);
  setFun(50);
  setFullness(100);
};

export default startOver;
