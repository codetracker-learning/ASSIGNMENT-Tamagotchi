let energy = 50;

const GetSleepStatus = () => energy;

const SetSleepStatusTakeANap = (addToEnergyStatus) => {
  energy += addToEnergyStatus;
};

const SetSleepStatusDeepSlumber = (addToEnergyStatus) => {
  energy += addToEnergyStatus;
};

export { GetSleepStatus, SetSleepStatusTakeANap, SetSleepStatusDeepSlumber };
