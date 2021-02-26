// fight.js
let strength = 100;

const getStrength = () => strength;

const flee = () => {
  strength += 1;
  if (strength > 100) {
    strength = 100;
  }
};

const fight = () => {
  strength -= 10;
  if (strength < 0) {
    strength = 0;
  }
};

export { flee, fight, getStrength };
