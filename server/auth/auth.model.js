/* eslint-disable consistent-return */
const log = require('../utils').winston;
const db = require('../database/dbConfig');

const findBy = (filter) => {
  try {
    return db('users')
      .where(filter)
      .first();
  } catch (err) {
    log.info(err.message);
  }
};

const findById = (id) => {
  try {
    return db('users')
      .where({ id })
      .first();
  } catch (err) {
    log.info(err.message);
  }
};

const createUser = async (data) => {
  try {
    const [id] = await db('users').insert(data).returning('id');
    return findById(id);
  } catch (err) {
    log.info(err.message);
  }
};


module.exports = {
  findBy,
  findById,
  createUser,
};
