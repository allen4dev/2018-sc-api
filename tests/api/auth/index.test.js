const request = require('supertest'); // eslint-disable-line
const mongoose = require('mongoose');

const app = require('../../../server/app');

const Artist = mongoose.model('Artist');

describe('auth', () => {
  beforeEach(done => {
    Artist.remove({}).then(() => done());
  });
});
