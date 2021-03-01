// petEvents.js
import addPet from '../components/forms/petForm';
import {
  setPetName, setPetUrl
} from '../helpers/data/petData';
import startOver from '../helpers/calculators/startOver';
import displayQuad from '../components/allQuads';

const listenPets = (e) => {
  console.warn(e.target.id);
  if (e.target.id === 'add-pet') {
    addPet();
  }
  if (e.target.id === 'submit-pet') {
    let petName = '';
    let petUrl = '';
    if (document.querySelector('#pet-name').value
        && document.querySelector('#pet-img-url').value) {
      petName = document.querySelector('#pet-name').value;
      petUrl = document.querySelector('#pet-img-url').value;
      setPetName(petName);
      setPetUrl(petUrl);
      startOver();
      displayQuad();
    }
  }
};

export default listenPets;
