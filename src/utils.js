'use strict';

const fs = require(`fs`).promises;
const chalk = require(`chalk`);
const dayjs = require(`dayjs`);

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const shuffle = (someArray) => {
  const shuffledArray = [...someArray];

  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const randomPosition = getRandomInt(0, i);
    [shuffledArray[i], shuffledArray[randomPosition]] = [shuffledArray[randomPosition], shuffledArray[i]];
  }

  return shuffledArray;
};

const generateRandomDate = (periodInMonths) => {
  const endDate = dayjs();
  const startDate = endDate.subtract(periodInMonths, `month`);
  const randomDate = dayjs(getRandomInt(startDate, endDate)).format(`YYYY-MM-DD HH:mm:ss`);

  return randomDate;
};

const readFile = async (fileName) => {
  try {
    const content = await fs.readFile(fileName, `utf8`);
    return content.trim().split(`\n`);
  } catch (err) {
    console.log(chalk.red(err));
    return [];
  }
};

module.exports = {
  getRandomInt,
  shuffle,
  generateRandomDate,
  readFile,
};
