'use strict';

const express = require(`express`);
const chalk = require(`chalk`);
const postsRouter = require(`./routes/posts-router`);
const {CommandName} = require(`../../../constants`);

const DEFAULT_PORT = 3000;


module.exports = {
  name: CommandName.SERVER,
  run([port]) {
    const currentPort = parseInt(port, 10) || DEFAULT_PORT;

    const server = express();

    server.use(express.json());
    server.use(`/posts`, postsRouter);

    server.listen(currentPort);

    server.on(`listening`, () => {
      console.info(chalk.green(`Ожидаю соединений на ${currentPort}`));
    });

    server.on(`error`, ({message}) => {
      console.error(chalk.red(`Ошибка при создании сервера: ${message}`));
    });
  }
};
