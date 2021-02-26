// energy.js
let energy = 50;

const getEnergy = () => energy;

const nap = () => {
  energy += 50;
  if (energy > 100) {
    energy = 100;
  }
};

const slumber = () => {
  energy += 60;
  if (energy > 100) {
    energy = 100;
  }
};

export { nap, slumber, getEnergy };
