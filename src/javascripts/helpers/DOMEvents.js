import { eatHealthyFood, eatUnhealthyFood } from './data/eatEvent';
import { SuperFunActivity, SlightlyFunActivity } from './data/playEvent';
import { CommitViolence, RunAway } from './data/fightEvent';
import { TakeANap, DeepSlumber } from './data/sleepEvent';

const domEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.id.includes('goodFoodID')) {
      eatHealthyFood();
    }

    if (e.target.id.includes('badFoodID')) {
      eatUnhealthyFood();
    }

    if (e.target.id.includes('superFunActivityID')) {
      SuperFunActivity();
    }

    if (e.target.id.includes('slightlyFunActivityID')) {
      SlightlyFunActivity();
    }

    if (e.target.id.includes('runAwayID')) {
      CommitViolence();
    }

    if (e.target.id.includes('commitViolenceID')) {
      RunAway();
    }

    if (e.target.id.includes('takeANapID')) {
      TakeANap();
    }

    if (e.target.id.includes('deepSlumberID')) {
      DeepSlumber();
    }
  });
};

export default domEvents;
