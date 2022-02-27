'use strict';

const chalk = require(`chalk`);
const {CommandName} = require(`../../constants`);

module.exports = {
  name: CommandName.HELP,
  run() {
    console.log(chalk.gray(`
    Программа запускает http-сервер и формирует файл с данными для API.

    Гайд:
    service.js <command>
    Команды:
    ${CommandName.VERSION}:            выводит номер версии
    ${CommandName.HELP}:               печатает этот текст
    ${CommandName.GENERATE} <count>    формирует файл mocks.json
    `));
  }
};
