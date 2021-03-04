let strenght = 100;

const GetFightStatus = () => strenght;

const SetCommitViolence = (addToStrenghtStatus) => {
  strenght += addToStrenghtStatus;
  if (strenght > 100) {
    strenght = 100;
  }
};

const SetRunAway = (deleteFromStrenghtStatus) => {
  strenght -= deleteFromStrenghtStatus;
  if (strenght < 0) {
    strenght = 0;
  }
};

export { GetFightStatus, SetCommitViolence, SetRunAway };
