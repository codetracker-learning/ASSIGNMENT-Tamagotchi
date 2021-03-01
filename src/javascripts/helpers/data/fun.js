// fun.js
let fun = 50;

const getFun = () => fun;

const addFun = (amount) => {
  const initialAmount = fun;
  fun += amount;
  if (fun > 100) {
    fun = 100;
  }
  if (fun < 0) {
    fun = 0;
  }
  return fun - initialAmount;
};

const setFun = (amount) => {
  fun = amount;
  if (fun > 100) {
    fun = 100;
  }
  if (fun < 0) {
    fun = 0;
  }
};

export { addFun, getFun, setFun };
