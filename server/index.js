require('./api/tracks/model');

const express = require('express');
const mongoose = require('mongoose');

const api = require('./api');

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/soundcloud');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Connected to mongoose'));

app.use('/api', api);

app.use(function(err, req, res, next) {
  console.log(err);
});

module.exports = app;
