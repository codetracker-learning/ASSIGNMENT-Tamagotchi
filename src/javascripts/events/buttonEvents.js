import listenEating from './eatingEvents';
import listenPlaying from './playingEvents';
import listenFighting from './fightingEvents';
import listenSleeping from './sleepingEvents';

const buttonEvents = () => {
  document.getElementById('eat').addEventListener('click', listenEating);
  document.getElementById('play').addEventListener('click', listenPlaying);
  document.getElementById('fight').addEventListener('click', listenFighting);
  document.getElementById('sleep').addEventListener('click', listenSleeping);
};

export default buttonEvents;
