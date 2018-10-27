const request = require('supertest'); // eslint-disable-line
const mongoose = require('mongoose');

const app = require('../../../server');

const Track = mongoose.model('Track');

describe('tracks', () => {
  it('should return a json with a message of Tracks router', () => {
    const track = { name: 'My awesome Track' };

    return request(app)
      .post('/api/tracks')
      .send({ name: track.name })
      .expect(201);
  });
});
