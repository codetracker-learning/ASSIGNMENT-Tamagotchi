let full = 100;

const feedHealthy = () => {
  full += 10;
  if (full > 100) {
    full = 100;
  }
};

const feedJunk = () => {
  full -= 3;
  if (full < 0) {
    full = 100;
  }
};

const getFullness = () => full;

export { feedHealthy, feedJunk, getFullness };
