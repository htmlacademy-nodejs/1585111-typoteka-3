'use strict';

const packageJsonFile = require(`../../../package.json`);
const {CommandName} = require(`../../../constants`);

module.exports = {
  name: CommandName.VERSION,
  run() {
    console.log(`Версия проекта ${packageJsonFile.version}`);
  }
};
