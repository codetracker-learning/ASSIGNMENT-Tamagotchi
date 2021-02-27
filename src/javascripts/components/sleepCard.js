function sleepCard() {
  document.querySelector('#sleep').innerHTML = `
  <div class="card text-center">
            <div class="card-header">
              Sleep
            </div>
            <div class="card-body">
              <h5 id="energy" class="card-title">50</h5>
              <button type="button" id="nap" href="#" class="btn btn-primary">Nap</button>
              <button type="button" id="slumber" href="#" class="btn btn-primary">Slumber</button>
            </div>
          </div>`;
}

export default sleepCard;
