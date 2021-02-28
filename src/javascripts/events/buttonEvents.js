import listenEating from './eatingEvents';
import listenPlaying from './playingEvents';
import listenFighting from './fightingEvents';
import listenSleeping from './sleepingEvents';
import listenPets from './petEvents';

const buttonEvents = () => {
  document.getElementById('eat').addEventListener('click', listenEating);
  document.getElementById('play').addEventListener('click', listenPlaying);
  document.getElementById('fight').addEventListener('click', listenFighting);
  document.getElementById('sleep').addEventListener('click', listenSleeping);
  document.getElementById('pet').addEventListener('click', listenPets);
};

export default buttonEvents;
