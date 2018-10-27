const mongoose = require('mongoose');

const TrackSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: 'You must provide a track name',
    },
  },
  {
    timestamps: true,
  },
);

const Track = mongoose.model('Track', TrackSchema);

module.exports = Track;
