import { SetSleepStatusTakeANap, SetSleepStatusDeepSlumber } from './sleepStatus';
import PrintSleepQuadrant from '../sleepQuadrant';

const TakeANap = () => {
  SetSleepStatusTakeANap(50);
  PrintSleepQuadrant();
};

const DeepSlumber = () => {
  SetSleepStatusDeepSlumber(60);
  PrintSleepQuadrant();
};

export { TakeANap, DeepSlumber };
