'use strict';

const express = require(`express`);
const postsRouter = require(`./routes/posts-router`);
const {CommandName, HttpCode} = require(`../../../constants`);
const apiRoutes = require(`../../api`);
const {getLogger} = require(`../../lib/logger`);

const DEFAULT_PORT = 3000;
const API_PREFIX = `/api`;

const logger = getLogger({name: `api`});
const server = express();

server.use((req, res, next) => {
  logger.debug(`Маршрут запроса: ${req.url}`);

  res.on(`finish`, () => {
    logger.info(`Код ответа: ${res.statusCode}`);
  });

  next();
});

server.use(express.json());
server.use(`/posts`, postsRouter);
server.use(API_PREFIX, apiRoutes);

server.use((req, res) => {
  res.status(HttpCode.NOT_FOUND)
  .send(`Not found`);
  logger.error(`Маршрут не найден: ${req.url}`);
});

server.use((err, _req, _res, _next) => {
  logger.error(`Ошибка обработки запроса: ${err.message}`);
});


module.exports = {
  name: CommandName.SERVER,
  run([port]) {
    const currentPort = parseInt(port, 10) || DEFAULT_PORT;

    try {
      server.listen(currentPort, (err) => {
        if (err) {
          logger.error(`Ошибка при создании сервера: ${err.message}`);
        }
        logger.info(`Ожидаю соединений на ${currentPort}`);
      });
    } catch (err) {
      logger.error(`Ошибка сервера: ${err.message}`);
    }
  }
};
