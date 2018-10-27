const mongoose = require('mongoose');

const Track = mongoose.model('Track');

exports.show = function fetchTrack(req, res, next) {
  res.json({ hello: 'world' });
};

exports.create = function saveTrack(req, res, next) {
  const { track } = req.body;
  const record = new Track(track);

  record
    .save()
    .then(created => {
      res.status(201).send({ track: created });
    })
    .catch(next);
};
