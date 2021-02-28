// random.js

const getRandom = (floor, ceiling) => Math.floor(Math.random() * (ceiling - floor + 1) + floor);

export default getRandom;
