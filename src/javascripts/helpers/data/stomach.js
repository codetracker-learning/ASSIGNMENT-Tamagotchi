let full = 100;

const addFood = (amount) => {
  const initialAmount = full;
  full += amount;
  if (full > 100) {
    full = 100;
  }
  if (full < 0) {
    full = 0;
  }
  return full - initialAmount;
};

const setFullness = (amount) => {
  full = amount;
  if (full > 100) {
    full = 100;
  }
  if (full < 0) {
    full = 0;
  }
};

const getFullness = () => full;

export { addFood, getFullness, setFullness };
