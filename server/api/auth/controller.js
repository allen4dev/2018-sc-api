const mongoose = require('mongoose');

const Artist = mongoose.model('Artist');

exports.create = function signup(req, res, next) {
  const { email, password, name, tags = [] } = req.body.data;

  Artist.register(new Artist({ email, name, tags }), password, err => {
    if (err) return next(err);

    res.status(201).json({ data: { attributes: { email, name } } });
  });
};
