'use strict';

const chalk = require(`chalk`);
const packageJsonFile = require(`../../../package.json`);
const {CommandName} = require(`../../constants`);

module.exports = {
  name: CommandName.VERSION,
  run() {
    console.log(chalk.blue(`Версия проекта ${packageJsonFile.version}`));
  }
};
