// petEvents.js
import addPet from '../components/forms/petForm';
import drawPet from '../components/pet';
import {
  getPetName, getPetUrl, setPetName, setPetUrl
} from '../helpers/data/petData';

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
    } else {
      petName = getPetName();
      petUrl = getPetUrl();
    }
    drawPet(petName, petUrl);
  }
};

export default listenPets;
