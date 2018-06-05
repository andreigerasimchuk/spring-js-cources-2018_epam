const appReady = require('./initializers');
const server = require('./server');

appReady
  .then(connected => {
    server.init();
    server.start();
 })
 .catch(err => {
   console.info('\nNo connection to mongodb!');
   console.error(err.message);
  })
