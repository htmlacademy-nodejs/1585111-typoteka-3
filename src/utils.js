'use strict';

const dayjs = require(`dayjs`);

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const shuffle = (someArray) => {
  for (let i = someArray.length - 1; i > 0; i--) {
    const randomPosition = Math.floor(Math.random() * i);
    [someArray[i], someArray[randomPosition]] = [someArray[randomPosition], someArray[i]];
  }

  return someArray;
};

const generateRandomDate = (periodInMonths) => {
  const endDate = dayjs();
  const startDate = endDate.subtract(periodInMonths, `month`);
  const randomDate = dayjs(getRandomInt(startDate, endDate)).format(`YYYY-MM-DD HH:mm:ss`);

  return randomDate;
};

module.exports = {
  getRandomInt,
  shuffle,
  generateRandomDate,
};
