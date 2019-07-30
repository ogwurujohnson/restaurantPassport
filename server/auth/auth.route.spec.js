const request = require('supertest');
const server = require('../api/api');
const db = require('../database/dbConfig');

beforeEach(async () => {
  await db('users').truncate();
});

afterEach(async () => {
  await db('users').truncate();
});

afterAll(async () => {
  await db('users').truncate();
});

const dummyUser = {
  firstname: 'Johnson',
  lastname: 'Ogwuruu',
  email: 'ogwurujohnson@gmail.com',
  password: 'Johnny55',
  city: 'Enugu',
  role: 'user',
};


const badData = {
  firstname: 'johnson',
};

const loginData = {
  email: 'ogwurujohnson@gmail.com',
  password: 'Johnny55',
};

const fakeLoginData = {
  email: 'ogwurujohn@gmail.com',
  password: 'Johnny55',
};


describe('test register endpoints', () => {
  it('GET / returns 200 status code', () => request(server)
    .get('/api/v1/auth')
    .expect(200)
    .then((res) => {
      expect(res.body).toBeInstanceOf(Object);
      expect(res.body.message).toBe(
        'Welcome to Auth Module',
      );
    }));

  it('POST /register returns 201', () => request(server)
    .post('/api/v1/auth/register')
    .send(dummyUser)
    .expect(201));

  it('POST /register returns an error 400 if missing details', () => request(server)
    .post('/api/v1/auth/register')
    .send(badData)
    .expect(400)
    .then((res) => {
      expect(res.body).toBeInstanceOf(Object);
      expect(res.body.message).toBe(
        'missing required fields, check documentation for guidance',
      );
    }));
  it('POST /register returns an error 400 if no object is sent', () => request(server)
    .post('/api/v1/auth/register')
    .expect(400)
    .then((res) => {
      expect(res.body).toBeInstanceOf(Object);
      expect(res.body.message).toBe('missing project data');
    }));
});

describe('test login endpoints', () => {
  it('returns 200 if successful', async () => {
    await request(server)
      .post('/api/v1/auth/register')
      .send(dummyUser);
    await request(server)
      .post('/api/v1/auth/login')
      .send(loginData)
      .expect(200);
  });
  it('returns 401 if unsuccessful', async () => request(server)
    .post('/api/v1/auth/login')
    .send(fakeLoginData)
    .expect(401));
});
