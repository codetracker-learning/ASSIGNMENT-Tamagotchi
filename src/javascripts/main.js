import '../styles/main.scss';
import displayQuads from './components/allQuads';
import buttonEvents from './events/buttonEvents';

const printPageBase = () => {
  displayQuads();
  document.querySelector('#pet').innerHTML = '<h2>Pet</h2>';
  buttonEvents();
};

const init = () => {
  printPageBase();
};

init();
