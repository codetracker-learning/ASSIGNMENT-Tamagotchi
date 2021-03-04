let fun = 50;

const GetPlayStatus = () => fun;

const SetToSuperFunActivity = (addToSuperFunActivity) => {
  fun += addToSuperFunActivity;
  if (fun > 100) {
    fun = 100;
  }
};

const SetToSlightlyFunActivity = (addToSlightlyFunActivity) => {
  fun += addToSlightlyFunActivity;
  if (fun > 100) {
    fun = 100;
  }
};

export { GetPlayStatus, SetToSuperFunActivity, SetToSlightlyFunActivity };
