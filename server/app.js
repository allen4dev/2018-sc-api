const Artist = require('./api/artists/model');
require('./api/tracks/model');

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

const api = require('./api');

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/soundcloud');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Connected to mongoose'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());

passport.use(Artist.createStrategy());
passport.serializeUser(Artist.serializeUser());
passport.deserializeUser(Artist.deserializeUser());

app.use('/api', api);

app.use(function(err, req, res, next) {
  console.log(err);
});

module.exports = app;
