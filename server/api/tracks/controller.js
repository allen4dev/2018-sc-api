const mongoose = require('mongoose');

const Track = mongoose.model('Track');

exports.create = function saveTrack(req, res, next) {
  const { name } = req;
  console.log('req', req);

  const track = new Track({ name });

  track
    .save()
    .then(created => {
      res.status(201).send(created);
    })
    .catch(next);
};
