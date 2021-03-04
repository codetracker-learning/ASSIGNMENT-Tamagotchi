import { GetSleepStatus } from './data/sleepStatus';

const PrintSleepQuadrant = () => {
  const outputElement = document.querySelector('#sleep');
  const energyStatus = GetSleepStatus();
  outputElement.innerHTML = `
                             <div class="sleepBorder">
                               <div id="sleep-Name">
                                 <h1>Sleep</h1>
                               </div>
                               <div id="sleepScore">
                                 <h3>The current sleep energy is:${energyStatus}</h3>
                               </div>
                               <div class="buttons-container">
                                 <button type="button" class="btn btn-primary" id="takeANapID">Take a  Nap</button>
                                 <button type="button" class="btn btn-primary" id="deepSlumberID">Deep  Slumber</button>
                               </div>
                             </div>
                             `;
};

export default PrintSleepQuadrant;
