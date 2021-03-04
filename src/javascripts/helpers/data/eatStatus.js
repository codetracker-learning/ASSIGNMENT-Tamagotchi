let full = 100;

const GetEatStatus = () => full;

const SetEatStatusHealthyFood = (addToEatStatus) => {
  full += addToEatStatus;
  if (full > 100) {
    full = 100;
  }
};

const SetEatStatusUnhealthyFood = (deleteFromEatStatus) => {
  full -= deleteFromEatStatus;
  if (full < 0) {
    full = 0;
  }
};

export { GetEatStatus, SetEatStatusHealthyFood, SetEatStatusUnhealthyFood };
