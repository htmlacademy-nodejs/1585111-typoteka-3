'use strict';

const CommandName = {
  VERSION: `--version`,
  HELP: `--help`,
  GENERATE: `--generate`,
  SERVER: `--server`,
};

const HttpCode = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
  FORBIDDEN: 403,
  UNAUTHORIZED: 401,
  BAD_REQUEST: 400,
};

const DateFormat = {
  FULL: `DD.MM.YYYY, HH:mm`,
  SHORT: `DD.MM.YYYY`,
};

module.exports = {
  CommandName,
  DateFormat,
  HttpCode
};
