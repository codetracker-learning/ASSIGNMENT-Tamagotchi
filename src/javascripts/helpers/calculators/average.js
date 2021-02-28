import { getFullness } from '../data/stomach';
import { getFun } from '../data/fun';
import { getStrength } from '../data/fight';
import { getEnergy } from '../data/energy';

const calcAve = () => {
  const fullness = getFullness();
  const fun = getFun();
  const strength = getStrength();
  const energy = getEnergy();
  let lifeScore = (fullness + fun + strength + energy) / 4;
  const least = Math.min(fullness, strength, energy);
  if (least < 5) {
    lifeScore *= least / 100;
  }
  return lifeScore;
};

export default calcAve;
