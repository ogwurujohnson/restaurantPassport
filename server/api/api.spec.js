const request = require('supertest');
const server = require('./api');

describe('server is live', () => {
  it('GET / returns 200 status code and json content-type', () => request(server)
    .get('/')
    .expect(200)
    .expect('Content-Type', /json/));

  it('GET / returns content', () => request(server)
    .get('/')
    .then((res) => {
      expect(res.body).toBeInstanceOf(Object);
      expect(res.body.message).toBe(
        'Welcome to restaurant review api, kindly navigate to this link to explore the api /api/v1/ ',
      );
    }));
  it('GET / returns 404 error', () => request(server)
    .get('/unknwon')
    .then((res) => {
      expect(404);
      expect(res.body).toBeInstanceOf(Object);
    }));
});
