'use strict';

const Cli = require(`./cli`);
const {CommandName} = require(`../../constants`);

const userArguments = process.argv.slice(2);
const [userCommand] = userArguments;

if (!userCommand || !Cli[userCommand]) {
  Cli[CommandName.HELP].run();
  process.exit();
}

Cli[userCommand].run(userArguments.slice(1));
