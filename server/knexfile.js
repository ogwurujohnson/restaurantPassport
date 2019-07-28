// Update with your config settings.
require('dotenv').config({ path: '../.env' });
const path = require('path');

const dbUrl = process.env.DB_URL;
module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: path.resolve(__dirname, './database/restaurant.db3'),
    },
    useNullAsDefault: true,
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_key=ON', done);
      },
    },
    migrations: {
      directory: path.resolve(__dirname, './database/migrations'),
    },
    seeds: {
      directory: path.resolve(__dirname, './database/seeds'),
    },
  },

  testing: {
    client: 'sqlite3',
    connection: {
      filename: path.resolve(__dirname, './database/restaurant-test.db3'),
    },
    useNullAsDefault: true,
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_key=ON', done);
      },
    },
    migrations: {
      directory: path.resolve(__dirname, './database/migrations'),
    },
    seeds: {
      directory: path.resolve(__dirname, './database/seeds'),
    },
  },

  production: {
    client: 'pg',
    connection: `${dbUrl}?ssl=true`,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: path.resolve(__dirname, './database/migrations'),
    },
    seeds: {
      directory: path.resolve(__dirname, './database/seeds'),
    },
  },
};
