'use strict';

const CommandName = {
  VERSION: `--version`,
  HELP: `--help`,
  GENERATE: `--generate`,
  SERVER: `--server`,
};

const HttpCode = {
  OK: 200,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
  FORBIDDEN: 403,
  UNAUTHORIZED: 401,
};

module.exports = {
  CommandName,
  HttpCode
};
