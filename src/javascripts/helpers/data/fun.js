// fun.js
let fun = 50;

const getFun = () => fun;

const superFun = () => {
  fun += 50;
  if (fun > 100) {
    fun = 100;
  }
};

const regularFun = () => {
  fun += 2;
  if (fun > 100) {
    fun = 100;
  }
};

export { superFun, regularFun, getFun };
