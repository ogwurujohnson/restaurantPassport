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

const dummyUser2 = {
  firstname: 'Johnson',
  lastname: 'Ogwuru',
  email: 'ogwurujohnson@gmail.com',
  password: 'Johnny55',
  city: 'Enugu',
  role: 'user',
};

const restaurantData = {
  name: 'Junior High',
  description: 'The best restaurant in the whole of lekki',
  city: 'Lagos',
  image: 'null',
};

const loginData = {
  email: 'ogwurujohnson3@gmail.com',
  password: 'Johnny55',
};

// eslint-disable-next-line no-unused-vars
let token;

beforeAll(async () => {
  await db('users').truncate();
  await db('reviews').truncate();
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
  await db('reviews').truncate();
  await db('restaurants').truncate();
  await db('users').truncate();
});


describe('Reviews endpoints work', () => {
  it('/POST returns 201', async () => {
    await db('users').insert(dummyUser2);
    await db('restaurants').insert(restaurantData);
    return request(server)
      .post('/api/v1/reviews/1/1')
      .set('authorization', token)
      .send({ ratings: '2.0', reviews: 'hello' })
      .expect(201);
  });

  it('/POST returns 409', async () => {
    await db('users').truncate();
    await db('users').insert(dummyUser2);
    await db('restaurants').insert(restaurantData);
    return request(server)
      .post('/api/v1/reviews/1/1')
      .set('authorization', token)
      .expect(409);
  });

  it('/POST returns 400 if error in url', async () => {
    await db('users').truncate();
    await db('users').insert(dummyUser2);
    await db('restaurants').insert(restaurantData);
    return request(server)
      .post('/api/v1/reviews/1mm/1')
      .set('authorization', token)
      .expect(400);
  });

  it('/POST returns 401', () => request(server)
    .post('/api/v1/reviews/1/1')
    .expect(401));

  it('/DELETE returns 200 if error in url', async () => {
    await db('users').truncate();
    await db('users').insert(dummyUser2);
    await db('restaurants').insert(restaurantData);
    return request(server)
      .delete('/api/v1/reviews/1')
      .set('authorization', token)
      .expect(200);
  });

  it('/DELETE returns 400 if error in url', async () => {
    await db('users').truncate();
    await db('users').insert(dummyUser2);
    await db('restaurants').insert(restaurantData);
    return request(server)
      .delete('/api/v1/reviews/1mm')
      .set('authorization', token)
      .expect(400);
  });
});
