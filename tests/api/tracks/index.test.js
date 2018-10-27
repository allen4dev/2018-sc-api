const request = require('supertest'); // eslint-disable-line
const mongoose = require('mongoose');

const app = require('../../../server');

const Track = mongoose.model('Track');

describe('tracks', () => {
  beforeEach(done => {
    Track.remove({}).then(() => done());
  });

  it('should create a dummie track', () => {
    const track = { name: 'My awesome Track' };

    return request(app)
      .post('/api/tracks')
      .send({ track })
      .expect(201)
      .expect(res => {
        const created = res.body.track;

        expect(created.name).toEqual(track.name);
        expect(created._id).toBeDefined();
      });
  });
});
