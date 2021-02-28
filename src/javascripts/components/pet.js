// pet.js
import printDom from './printDom';

const drawPet = (name, url) => {
  const petStr = `<div class="buttons" id="petButton">
    <button type="button" class="btn btn-primary" id="add-pet">Add Pet</button>
  </div>
  <div class="pet-container">
  <div id="pet-form-container"></div>
  <img class="pet-img" id="pet-img" src="${url}"
  </div>
  <h5>${name}</h5>`;

  printDom('#pet', petStr);
};

export default drawPet;
