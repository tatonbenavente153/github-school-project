function getRandomInteger(min, max) {
  min = Math.floor(Math.random() * (max - min + 1)) + min;
  return min;
}
