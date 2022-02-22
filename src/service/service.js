'use strict';

const Cli = require(`./cli`);

const userArguments = process.argv.slice(2);
const [userCommand] = userArguments;

if (!userCommand || !Cli[userCommand]) {
  process.exit();
}

Cli[userCommand].run(userArguments.slice(1));
