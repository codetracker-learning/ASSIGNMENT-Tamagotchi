import { SetEatStatusHealthyFood, SetEatStatusUnhealthyFood } from './eatStatus';
import PrintEatQuadrant from '../eatQuadrant';

const eatHealthyFood = () => {
  SetEatStatusHealthyFood(5);
  PrintEatQuadrant();
};

const eatUnhealthyFood = () => {
  SetEatStatusUnhealthyFood(3);
  PrintEatQuadrant();
};

export { eatHealthyFood, eatUnhealthyFood };
