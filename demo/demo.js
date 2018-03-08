require('../index');
const wisdom = require('./wisdom');

const demo =  () => {
  console.log(wisdom.get());
  setInterval(() => {
    console.logAt(0, wisdom.get())
  }, 500);
};

demo();