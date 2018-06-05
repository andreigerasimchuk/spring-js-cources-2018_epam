const mongoose = require('mongoose');
const config = require('./config');

const db = process.env.DB || config.DB;

mongoose.connect(db);
mongoose.Promise = Promise;

const mongoConnection = new Promise((resolve, reject) => {
  mongoose.connection
    .on('connected', resolve)
    .on('error', reject);
});

module.exports = Promise.all([
  mongoConnection,
]);