// energy.js
let energy = 50;

const getEnergy = () => energy;

const addEnergy = (amount) => {
  const initialAmount = energy;
  energy += amount;
  if (energy > 100) {
    energy = 100;
  }
  if (energy < 0) {
    energy = 0;
  }
  return energy - initialAmount;
};

const nap = () => {
  addEnergy(50);
};

const slumber = () => {
  addEnergy(60);
};

export {
  nap, slumber, addEnergy, getEnergy
};
