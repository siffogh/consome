const chalk = require('chalk');
const Logger = require('../index');
const wisdom = require('./wisdom');
const { logLineAt, clear } = new Logger();

const demo =  () => {
  console.log(chalk.white.bold(wisdom.get()));
  setInterval(() => logLineAt(0, chalk.white.bold(wisdom.get())), 500);
};


demo();
