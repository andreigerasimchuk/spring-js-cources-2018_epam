const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./config');
const api = require('./routes/api');

const TodoNotFoundError = require('./errors/TodoNotFoundError');

const app = express();

const init = () => {

  app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));
  app.use(bodyParser.json({ limit: '10mb' }));
  app.use(cors());
  app.use('/api/item/', api);
  app.use((err, req, res, next) => {
    if (err instanceof TodoNotFoundError) {
      res.status(404).json({ message: err.message });
    } else {
      res.status(500).json({ message: `Something went wrong` });
    }
  });
}

const start = () => {
  const port = process.env.PORT || config.PORT;
  app.listen(port, err => {
    if (err) {
      console.error(err, 'Internal server error');
    } else {
      console.info(`Server is up on ${port}'s port`);
    }
  });
}

module.exports = {
  init,
  start,
}
