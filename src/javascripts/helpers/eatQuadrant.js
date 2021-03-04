import { GetEatStatus } from './data/eatStatus';

const PrintEatQuadrant = () => {
  const outputElement = document.querySelector('#eat');
  const fullStatus = GetEatStatus();
  outputElement.innerHTML = `
                             <div class="eatBorder">
                               <div id="eats-Name">
                                 <h1>Eat</h1>
                               </div>
                               <div id="fullScore">
                                 <h3>The current hunger level is:${fullStatus} out of 100</h3>
                               </div>
                               <div class="buttons-container">
                                 <button type="button" class="btn btn-primary" id="goodFoodID">eat healthy food</button>
                                 <button type="button" class="btn btn-primary" id="badFoodID">eat unhealthy food</button>
                               </div>
                             </div>
                             `;
};

export default PrintEatQuadrant;
