const printDom = (id, domStr) => {
  document.querySelector(id).innerHTML = domStr;
};

export default printDom;
