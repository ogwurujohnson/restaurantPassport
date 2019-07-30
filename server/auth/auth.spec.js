const db = require('../database/dbConfig');
const Auth = require('./auth.model');

beforeEach(async () => {
  await db('users').truncate();
});
afterEach(async () => {
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

describe('Authentication suite works', () => {
  it(' /POST inserts into the db', async () => {
    let user = await db('users');
    expect(user).toHaveLength(0);

    await Auth.createUser(dummyUser);
    user = await db('users');
    expect(user).toHaveLength(1);
    expect(Array.isArray(user)).toBe(true);
  });

  it('/GET returns a single user', async () => {
    await Auth.createUser(dummyUser);
    const user = await db('users').where({ id: 1 }).first();

    expect(user).toHaveProperty('firstname', dummyUser.firstname);
  });

  it('/GET returns a single user', async () => {
    await Auth.createUser(dummyUser);
    const user = await db('users').where({ firstname: dummyUser.firstname });

    expect(user).toHaveProperty('username', dummyUser.username);
  });
});
