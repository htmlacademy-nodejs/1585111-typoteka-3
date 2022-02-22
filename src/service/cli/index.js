'use strict';

const version = require(`./version`);
const help = require(`./help`);

module.exports = {
  [version.name]: version,
  [help.name]: help,
};
