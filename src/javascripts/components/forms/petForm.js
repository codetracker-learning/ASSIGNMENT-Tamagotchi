// petForm.js

const addPet = () => {
  const petImgComponent = document.querySelector('#pet-img');
  if (petImgComponent) {
    petImgComponent.style.display = 'none';
  }
  document.querySelector('#pet').innerHTML = `
  <form class="pet-form" id="submit-pet">
    <div class="form-group">
      <label for="pet-name">Pet's Name</label>
      <input type="text" class="form-control" id="pet-name" 
            placeholder="Enter Pet's Name" required>
      <label for="pet-image-url">Pet Image Url</label>
      <input type="url" class="form-control" id="pet-img-url" 
            placeholder="Enter Image Url" required>
      <div class="buttons" id="submitPet">
        <button type="button" class="btn btn-primary" id="submit-pet">Submit</button>
      </div>
    </div>
  </form>`;
};

export default addPet;
