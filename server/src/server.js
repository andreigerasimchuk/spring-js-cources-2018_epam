const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./config');

const app = express();

const init = () => {

  app.use(bodyParser.json({ limit: '10mb' }));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cors());

}

const start = () => {
  const port = process.env.PORT || config.PORT;
  app.listen(port, err => {
    if(err) {
      console.error(err, 'Internal server error');
    } else {
      console.info(`Server is up on ${port}'s port`);
    }
  });
}

module.exports = {
  app,
  init,
  start,
}