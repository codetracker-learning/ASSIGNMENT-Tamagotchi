import { addStrength } from '../data/fight';
import { getEnergy, addEnergy } from '../data/energy';
import { addFun } from '../data/fun';
import { addFood } from '../data/stomach';
import getRandom from './random';

const eatHealthy = () => {
  const addedFood = addFood(getRandom(5, 10));
  if (getEnergy > 20) {
    addEnergy(-0.75 * addedFood);
  }
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
  if (getEnergy > 20) {
    addEnergy(0.5 * addedStrength);
  } else addEnergy(0.2 * addedStrength);
  addFood(0.5 * addedStrength);
  addFun(1.2 * addedStrength);
};

const flee = () => {
  const addedStrength = addStrength(getRandom(1, 3));
  addEnergy(-2 * addedStrength);
  addFood(-2 * addedStrength);
  addFun(-6 * addedStrength);
};

const nap = () => {
  addEnergy(getRandom(10, 25));
};

const slumber = () => {
  addEnergy(getRandom(30, 50));
};

export {
  eatHealthy, eatJunk, bigFun, littleFun,
  violence, flee,
  nap, slumber
};
