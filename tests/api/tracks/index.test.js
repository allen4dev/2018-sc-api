const request = require('supertest'); // eslint-disable-line

const app = require('../../../server');

describe('tracks', () => {
  it('should return a json with a message of Tracks router', done => {
    request(app)
      .get('/api/tracks')
      .expect(200)
      .expect(res => {
        const expected = { message: 'Tracks router' };

        expect(res.body).toEqual(expected);
      })
      .end(done);
  });
});
