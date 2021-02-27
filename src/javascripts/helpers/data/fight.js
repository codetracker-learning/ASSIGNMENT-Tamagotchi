// fight.js
let strength = 100;

const getStrength = () => strength;

const addStrength = (amount) => {
  const initialAmount = strength;
  strength += amount;
  if (strength > 100) {
    strength = 100;
  }
  if (strength < 0) {
    strength = 0;
  }
  return strength - initialAmount;
};

const flee = () => {
  addStrength(1);
};

const fight = () => {
  addStrength(-10);
};

export {
  flee, fight, addStrength, getStrength
};
