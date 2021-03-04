import { GetPlayStatus } from './data/playStatus';

const PrinPlayQuadrant = () => {
  const outputElement = document.querySelector('#play');
  const funStatus = GetPlayStatus();
  outputElement.innerHTML = `
                             <div class="playBorder">
                               <div id="play-Name">
                                 <h1>play</h1>
                               </div>
                               <div id="playScore">
                                 <h3>The current Fun Level is:${funStatus}</h3>
                               </div>
                               <div class="buttons-container">
                                 <button type="button" class="btn btn-primary" id="superFunActivityID">Super fun Activity</button>
                                 <button type="button" class="btn btn-primary" id="slightlyFunActivityID">Slightly Fun Activity</button>
                               </div>
                             </div>
                             `;
};

export default PrinPlayQuadrant;
