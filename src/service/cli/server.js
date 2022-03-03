'use strict';

const http = require(`http`);
const chalk = require(`chalk`);
const {CommandName, HttpCode} = require(`../../constants`);
const {readFile} = require(`../../utils`);

const DEFAULT_PORT = 3000;
const FILE_NAME = `mock.json`;

const sendResponse = (res, statusCode, content) => {
  const template = `
  <!Doctype html>
    <html lang="ru">
    <head>
      <title>With love from Node</title>
    </head>
    <body>${content}</body>
  </html>`.trim();

  res.writeHead(statusCode, {
    'Content-Type': `text/html; charset=UTF-8`,
  });
  res.end(template);
};

const onClientRequest = async (req, res) => {
  const NOT_FOUND = `Not Found`;

  switch (req.url) {
    case `/`:
      try {
        const fileContent = await readFile(FILE_NAME);
        const titles = JSON.parse(fileContent).map(({title}) => `<li>${title}</li>`).join(``);
        sendResponse(res, HttpCode.OK, `<ul>${titles}</ul>`);
      } catch (err) {
        sendResponse(res, HttpCode.NOT_FOUND, NOT_FOUND);
      }
      break;
    default:
      sendResponse(res, HttpCode.NOT_FOUND, NOT_FOUND);
  }
};

module.exports = {
  name: CommandName.SERVER,
  run([port]) {
    const currentPort = parseInt(port, 10) || DEFAULT_PORT;

    const server = http.createServer(onClientRequest);

    server.listen(currentPort);

    server.on(`listening`, () => {
      console.info(chalk.green(`Ожидаю соединений на ${currentPort}`));
    });

    server.on(`error`, ({message}) => {
      console.error(chalk.red(`Ошибка при создании сервера: ${message}`));
    });
  }
};
