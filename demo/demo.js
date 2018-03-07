require('../index');
const wisdom = require('./wisdom');

const demo =  () => {
  console.log(wisdom.get());
  setInterval(() => {
    console.logLineAt(0, wisdom.get())
  }, 500);
};

demo();
