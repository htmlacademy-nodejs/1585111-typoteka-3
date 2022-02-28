'use strict';

const fs = require(`fs`).promises;
const chalk = require(`chalk`);
const {CommandName} = require(`../../constants`);
const {getRandomInt, shuffle, generateRandomDate, readFile} = require(`../../utils`);

const DEFAULT_COUNT = 1;
const MAX_COUNT = 1000;
const ANNOUNCE_SIZE = 5;
const PERIOD_IN_MONTH = 3;
const FILE_NAME = `mock.json`;
const FILE_TITLES = `data/titles.txt`;
const FILE_SENTENCES = `data/sentences.txt`;
const FILE_CATEGORIES = `data/categories.txt`;


const generatePublication = (count, titles, sentences, categories) => {
  return Array.from({length: count}, () => {
    return {
      title: titles[getRandomInt(0, titles.length - 1)],
      createdDate: generateRandomDate(PERIOD_IN_MONTH),
      announce: shuffle(sentences).slice(0, getRandomInt(1, ANNOUNCE_SIZE - 1)).join(` `),
      fullText: shuffle(sentences).slice(0, getRandomInt(1, sentences.length - 1)).join(` `),
      сategory: shuffle(categories).slice(0, getRandomInt(1, categories.length - 1)).join(` `),
    };
  });
};

const writePublications = async (fileName, publications) => {
  try {
    await fs.writeFile(fileName, publications);
    console.log(chalk.green(`Публикации успешно сгенерированы`));
  } catch (err) {
    console.log(chalk.red(`Ошибка генерации публикаций`));
    process.exit(1);
  }
};

module.exports = {
  name: CommandName.GENERATE,
  async run([count]) {
    const publicationCount = parseInt(count, 10) || DEFAULT_COUNT;

    if (publicationCount > MAX_COUNT) {
      console.log(chalk.red(`Не больше ${MAX_COUNT} публикаций`));
      process.exit(1);
    }

    const titles = await readFile(FILE_TITLES);
    const sentences = await readFile(FILE_SENTENCES);
    const categories = await readFile(FILE_CATEGORIES);

    const generatedPublications = JSON.stringify(generatePublication(publicationCount, titles, sentences, categories));

    writePublications(FILE_NAME, generatedPublications);
  }
};
