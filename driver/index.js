const Logger = require('../index');

const logger = new Logger();

const demo =  () => {
  console.log('------Demo------');
  logger.logLineAt(1, 'firstLine');
  logger.logLineAt(2, 'secondLine');
  console.log('------End------');
  
  
  setTimeout(() => {
    logger.logLineAt(1, 'firstLine modified');
  }, 2000);
  
  setTimeout(() => {
    logger.logLineAt(2, 'secondLine modified');
  }, 4000);
  
};


demo()

