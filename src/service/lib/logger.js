'use strict';

const pino = require(`pino`);
const {Env} = require(`../../constants`);

const LOG_FILE = `api.log`;
const {NODE_ENV, LOG_LEVEL} = process.env;
const isDevMode = NODE_ENV === Env.DEVELOPMENT;
const defaultLogLevel = isDevMode ? `info` : `error`;

const logger = pino({
  name: `base-logger`,
  level: LOG_LEVEL || defaultLogLevel,
  transport: {
    target: `pino-pretty`,
    options: {
      colorize: true
    }
  }
}, isDevMode ? process.stdout : pino.destination(LOG_FILE));

module.exports = {
  logger,
  getLogger(options = {}) {
    return logger.child(options);
  }
};
