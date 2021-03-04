let energy = 50;

const GetSleepStatus = () => energy;

const SetSleepStatusTakeANap = (addToEnergyStatus) => {
  energy += addToEnergyStatus;
  if (energy > 100) {
    energy = 100;
  }
};

const SetSleepStatusDeepSlumber = (addToEnergyStatus) => {
  energy += addToEnergyStatus;
  if (energy > 100) {
    energy = 100;
  }
};

export { GetSleepStatus, SetSleepStatusTakeANap, SetSleepStatusDeepSlumber };
