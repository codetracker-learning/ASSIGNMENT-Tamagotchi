import { SetToSuperFunActivity, SetToSlightlyFunActivity } from './playStatus';
import PrintPlayQuadrant from '../playQuadrant';

const SuperFunActivity = () => {
  SetToSuperFunActivity(50);
  PrintPlayQuadrant();
};

const SlightlyFunActivity = () => {
  SetToSlightlyFunActivity(2);
  PrintPlayQuadrant();
};

export { SuperFunActivity, SlightlyFunActivity };
