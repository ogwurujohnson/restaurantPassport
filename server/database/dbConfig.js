require('dotenv').config();
const knex = require('knex');
const knexConfig = require('../knexfile');

const env = process.env.DB_ENV || 'development';

module.exports = knex(knexConfig[env]);
