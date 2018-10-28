const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const Artist = mongoose.model('Artist');

exports.create = function signup(req, res, next) {
  const { email, password, name, tags = [] } = req.body.data;

  Artist.register(new Artist({ email, name, tags }), password)
    .then(res => jwt.sign({ _id: res._id }, 'secret'))
    .then(token =>
      res.status(201).json({
        data: { attributes: { token } },
      }),
    )
    .catch(next);
};

exports.show = function signin(req, res, next) {
  const { _id } = req.user;

  const token = jwt.sign({ _id }, 'secret');
  res.json({ data: { attributes: { token, _id } } });
};
