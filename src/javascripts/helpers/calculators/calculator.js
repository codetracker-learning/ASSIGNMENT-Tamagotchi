import { addStrength } from '../data/fight';
import { addEnergy } from '../data/energy';
import { addFun } from '../data/fun';
import { addFood } from '../data/stomach';
import getRandom from './random';

const eatHealthy = () => {
  const addedFood = addFood(getRandom(5, 10));
  console.warn(`Adding: ${addedFood}`);
  addEnergy(-0.75 * addedFood);
  addStrength(addedFood * 0.5);
};

const eatJunk = () => {
  const addedFood = addFood(-getRandom(0, 3));
  addEnergy(2 * addedFood);
};

const bigFun = () => {
  addFun(getRandom(25, 60));
};

const littleFun = () => {
  addFun(getRandom(1, 4));
};

const violence = () => {
  const addedStrength = addStrength(-getRandom(5, 10));
  addEnergy(0.5 * addedStrength);
  addFood(addedStrength);
  addFun(addedStrength * 1.2);
};

const flee = () => {
  const addedStrength = addStrength(getRandom(1, 3));
  addEnergy(-2 * addedStrength);
  addFood(-2 * addedStrength);
  addFun(-6 * addedStrength);
};

export {
  eatHealthy, eatJunk, bigFun, littleFun,
  violence, flee
};
