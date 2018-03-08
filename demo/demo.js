require('../index');
const wisdom = require('./wisdom');

console.log(wisdom.get());
setInterval(() => {
  console.logAt(0, wisdom.get())
}, 500);