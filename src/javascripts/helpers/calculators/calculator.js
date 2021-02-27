import { addStrength } from '../data/fight';
import { addEnergy } from '../data/energy';
import { addFun } from '../data/fun';
import { addFood } from '../data/stomach';

const eatHealthy = () => {
  const addedFood = addFood(10);
  addEnergy(-0.75 * addedFood);
  addStrength(addedFood * 0.5);
};

const eatJunk = () => {
  const addedFood = addFood(-3);
  addEnergy(2 * addedFood);
};

const bigFun = () => {
  addFun(50);
};

const littleFun = () => {
  addFun(2);
};

const violence = () => {
  const addedStrength = addStrength(-10);
  addEnergy(0.5 * addedStrength);
  addFood(addedStrength);
  addFun(addedStrength * 1.2);
};

const flee = () => {
  const addedStrength = addStrength(1);
  addEnergy(-2 * addStrength);
  addFood(-2 * addedStrength);
  addFun(-6 * addedStrength);
};

export {
  eatHealthy, eatJunk, bigFun, littleFun,
  violence, flee
};
