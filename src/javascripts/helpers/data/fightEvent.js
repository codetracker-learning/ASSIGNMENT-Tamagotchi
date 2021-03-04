import { SetCommitViolence, SetRunAway } from './fightStatus';
import PrintFightQuadrant from '../fightQuadrant';

const CommitViolence = () => {
  SetCommitViolence(1);
  PrintFightQuadrant();
};

const RunAway = () => {
  SetRunAway(10);
  PrintFightQuadrant();
};

export { CommitViolence, RunAway };
