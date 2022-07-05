'use strict';

const {readFile} = require(`fs/promises`);

const FILE_NAME = `mock.json`;
let data = [];

const getMocksData = async () => {
  if (data.length) {
    return data;
  }

  try {
    const content = await readFile(FILE_NAME);
    data = JSON.parse(content);
  } catch (err) {
    console.log(err);
  }

  return data;
};

module.exports = getMocksData;
