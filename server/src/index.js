const appReady = require('./initializers');
const server = require('./server');

appReady
  .then(connected => {
    server.init();
    server.start();
 })
 .catch(error => {
   console.info('\nNo connection to mongodb!');
   console.error(error);
  })
