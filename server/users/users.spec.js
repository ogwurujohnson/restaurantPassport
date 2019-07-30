const request = require('supertest');
const server = require('../api/api');
const db = require('../database/dbConfig');

const dummyUser = {
  firstname: 'Johnson',
  lastname: 'Ogwuru',
  email: 'ogwurujohnson3@gmail.com',
  password: 'Johnny55',
  city: 'Enugu',
  role: 'user',
};

const loginData = {
  email: 'ogwurujohnson3@gmail.com',
  password: 'Johnny55',
};

// eslint-disable-next-line no-unused-vars
let token;

beforeAll(async () => {
  await db('users').truncate();
  await db('restaurants').truncate();
  await request(server)
    .post('/api/v1/auth/register')
    .send(dummyUser);
  const res = await request(server)
    .post('/api/v1/auth/login')
    .send(loginData);

  // eslint-disable-next-line prefer-destructuring
  token = res.body.token;
});


afterAll(async () => {
  await db('restaurants').truncate();
});


describe('Users endpoints work', () => {
  it('/GET returns 200 and restaurant data', async () => request(server)
    .get('/api/v1/users/')
    .set('authorization', token)
    .expect(200)
    .then((res) => {
      expect(res.body).toBeInstanceOf(Array);
    }));
  it('/GET returns 200 and restaurant data', async () => {  
    request(server)
      .get('/api/v1/users/1')
      .set('authorization', token)
      .expect(200)
      .then((res) => {
        expect(res.body).toBeInstanceOf(Object);
      });
  });
  it('/DELETE returns 200', async () => request(server)
    .delete('/api/v1/users/1')
    .set('authorization', token)
    .expect(200)
    .then((res) => {
      expect(res.body).toBeInstanceOf(Object);
    }));
});
