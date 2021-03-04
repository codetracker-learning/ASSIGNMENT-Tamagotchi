import { GetFightStatus } from './data/fightStatus';

const PrintFightQuadrant = () => {
  const outputElement = document.querySelector('#fight');
  const strenghtStatus = GetFightStatus();
  outputElement.innerHTML = `
                             <div class="fightBorder">
                               <div id="fight-Name">
                                 <h1>Fight</h1>
                               </div>
                               <div id="fightScore">
                                 <h3>The current strenght level is:${strenghtStatus}</h3>
                               </div>
                               <div class="buttons-container">
                                 <button type="button" class="btn btn-primary" id="runAwayID">Running Away</button>
                                 <button type="button" class="btn btn-primary" id="commitViolenceID">Commit Violence</button>
                               </div>
                             </div>
                             `;
};

export default PrintFightQuadrant;
