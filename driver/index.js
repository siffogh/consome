const Logger = require('../index');
const wisdom = require('./wisdom');
const { logLineAt } = new Logger();

const demo =  () => {
  console.log(wisdom.get());
  setInterval(() => logLineAt(0, wisdom.get()), 500);
};


demo();

