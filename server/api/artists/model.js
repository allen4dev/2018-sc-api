const mongoose = require('mongoose');
const validator = require('validator');
const passportLocalMongoose = require('passport-local-mongoose');

const ArtistSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: 'You must provide an Artist name',
    },
    fullname: {
      type: String,
      trim: true,
      default: '',
    },
    email: {
      type: String,
      trim: true,
      required: 'You must provide an email',
      unique: true,
      validate: {
        validator: validator.isEmail,
        message: '${VALUE} is not a valid email',
      },
    },
    tags: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  },
);

ArtistSchema.plugin(passportLocalMongoose, { usernameField: 'email' });

const Artist = mongoose.model('Artist', ArtistSchema);

module.exports = Artist;
