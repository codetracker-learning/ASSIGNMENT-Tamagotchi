import '../styles/main.scss';
import displayQuads from './components/allQuads';
import buttonEvents from './events/buttonEvents';

const printPageBase = () => {
  displayQuads();
  buttonEvents();
};

const init = () => {
  printPageBase();
};

init();
